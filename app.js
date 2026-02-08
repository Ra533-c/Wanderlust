if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
    console.log(process.env.NODE_ENV);
}

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
const { reviewsSchema } = require("./schema.js");
const Review = require("./models/reviews.js");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(cookieParser("secretcode"));

app.use((req, res, next) => {
    console.log(`AJJ KA METHOD : , ${req.method} , and the URL : ${req.originalUrl}`);
    next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const dbUrl = process.env.ATLAS_URL || 'mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); // Exit if DB connection fails
    }
}

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 60 * 60,
});

store.on("error", (err) => {
    console.log("Error in Mongo-Session-Store:", err);
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7days from now
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        path: "/"
    }
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//MW to extract the flash msg frm req.session and put it in res.locals
app.use((req, res, next) => {

    res.locals.success_msg = req.flash("success");
    res.locals.error_msg = req.flash("error");
    res.locals.currUser = req.user;

    next();
});

// <--------------------------------------------------------------->

// Root route - Redirects to /listing
app.get("/", (req, res) => {
    res.redirect("/listing");
});

// Search Route
const listingController = require("./controllers/listing.js");
app.get("/search", wrapasync(listingController.search));

app.use("/listing", listingRouter); // this is mounting =>
// Hey app! Agar koi bhi request aati hai jiska path /listing se shuru hota hai..."...toh uss request ko handle karne ke liye (listing) variable (jo 'mini-app' hai) ke paas bhej do.

app.use("/listing/:id/reviews", reviewRouter);

app.use("/", userRouter);

// <--------------------------------------------------------------->
//step1:send signed cookies =>
app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", { signed: true });
    res.send("Signed cookie sent successfully");
});
app.get("/verify", (req, res) => {
    console.log(req.cookies); //for unsigned cookies
    console.log(req.signedCookies); //for signed cookies
    res.send(req.signedCookies); // for signed cookies
});
// <--------------------------------------------------------------->

//iske bjye hm app.use krte h =>
app.use((req, res, next) => {
    next(new expressError(404, "Page Not Found!"));
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

const startServer = async () => {
    try {
        await main(); // Wait for the database to connect

        app.listen(8081, () => {
            console.log("Server is listening at port 8081");
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();
