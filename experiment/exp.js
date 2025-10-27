const express = require('express');
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require('connect-flash');


const sessionOptions = {
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//MW to extract the flash msg frm req.session and put it in res.locals
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash("key");
    res.locals.error_msg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;

    console.log(req.session);
    req.session.name = name;

    if(name == "anonymous" || name == "" || name.length<2){
        req.flash("error","User not registered !");
    }else{
        req.flash("key", "Successfully registered !");
    }

    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    
    // res.send(`${req.session.name} Welcome back!`);
    // console.log(req.flash("key"));

    res.render("page.ejs", { name: req.session.name });
});

// app.get("/count", (req, res) => {
//    if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`Test successful ${req.session.count}.`);
// });

app.listen(3000, (req, res) => {
    console.log("Server is running on the port 3000");
});