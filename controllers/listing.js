const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    let {category} = req.query;

    if(category){
         // Agar category hai, to sirf uss category ki listings find karo
        allListings = await Listing.find({ category: category });
    }else{
        allListings = await Listing.find({});
    }
    console.log(`allListings by category:${category} =>, ${allListings}`);
    res.render("listings/index.ejs", { allListings });
};

module.exports.new = async (req, res) => {
    console.log(`req.user: ${req.user}`);
    res.render("listings/form.ejs", { listing: {} });
};

module.exports.post = async (req, res, next) => {
    let coordinates = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
        .send();

    // console.log(coordinates.body.features[0].geometry);
    // res.send("DONE !");

    let url = req.file.path;
    let { filename } = req.file;

    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = coordinates.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);

    req.flash("success", "Successfully Created a new Listing !");
    res.redirect("/listing");
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listingById = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: ({
                path: "author",
            })
        })
        .populate("owner");

    if (!listingById) {
        req.flash("error", "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }
    console.log("listingById =>", listingById);
    res.render("listings/show.ejs", { listingById });
};

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    const listingById = await Listing.findById(id);
    if (!listingById) {
        req.flash("error", "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }

    let originalImgUrl = listingById.image.url;
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/e_blur:200,c_fit,h_250,w_250");

    res.render("listings/edit.ejs", { listingById, originalImgUrl });
};

module.exports.update = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully !");
    res.redirect(`/listing/${id}`);
};

module.exports.delete = async (req, res) => {
    let { id } = req.params; // Corrected line
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully !");
    res.redirect("/listing");
};