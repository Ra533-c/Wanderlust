const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require('path');
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapasync = require("./utils/wrapasync.js");
const expressError = require("./utils/expressError.js")
const Joi = require('joi');
const { listingSchema } = require("./schema.js");
const {reviewsSchema} = require("./schema.js");
const Review = require("./models/reviews.js");
const listing = require("./routes/listing.js");
const review = require("./routes/review.js");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const flash = require("connect-flash");


const mongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() => {
    console.log("Connected To DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}

app.engine("ejs" , ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(cookieParser("secretcode"));

app.use((req,res,next)=>{
    console.log(`AJJ KA METHOD : , ${req.method} , and the URL : ${req.originalUrl}`);
    next();
});

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

const sessionOptions = {
    secret:"mysecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7*24*60*60*1000, // 7days from now
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        secure:false,
        path:"/"
    }
}
app.use(session(sessionOptions));
app.use(flash());


//MW to extract the flash msg frm req.session and put it in res.locals
app.use((req,res,next)=>{

    res.locals.success_msg = req.flash("success");
    res.locals.error_msg = req.flash("error");
    
    // res.locals.delete_msg = req.flash("delete");
    // res.locals.update_msg = req.flash("update");
    next();
});

// <--------------------------------------------------------------->
// validateReview ,validateListings wala function yahan se hata dein, woh /routes/review.js,listing.js mein chala gaya hai
// <--------------------------------------------------------------->

app.use("/listing" , listing ); // this is mounting =>
    // Hey app! Agar koi bhi request aati hai jiska path /listing se shuru hota hai..."...toh uss request ko handle karne ke liye (listing) variable (jo 'mini-app' hai) ke paas bhej do.

// <--------------------------------------------------------------->

app.use("/listing/:id/reviews",review);

// <--------------------------------------------------------------->
//root route =>
app.get("/", (req, res) => {
    res.send("Hi , I am Root dir");
});

// <--------------------------------------------------------------->
//step1:send signed cookies =>
app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("Signed cookie sent successfully");
});
app.get("/verify",(req,res)=>{
    console.log(req.cookies); //for unsigned cookies
    console.log(req.signedCookies); //for signed cookies
    res.send(req.signedCookies); // for signed cookies
});
// <--------------------------------------------------------------->

//iske bjye hm app.use krte h =>
app.use((req,res,next)=>{
    next(new expressError(404,"Page Not Found!"));
});

// Middleware to handle Mongoose Validation and Cast Errors
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return next(new expressError(400, err.message));
    }
    if (err.name === 'CastError') {
        const message = `Invalid input for field ${err.path}. Please provide a valid value.`;
        return next(new expressError(400, message));
    }
    next(err);
});

// <--------------------------------------------------------------->
app.use((err, req, res, next) => {
    let { status = 500 } = err;
    res.status(status).render("error.ejs", { err }); // Pass the full err object
});
// <--------------------------------------------------------------->

app.listen(8080, () => {
    console.log("server is listening at port 8080 ");
});
