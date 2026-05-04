if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}


const express = require("express");
const app = express();
const dns = require("dns");
const path = require("path");
const Listing = require("./models/listing");
const Review = require("./models/review");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
 
const ExpressError = require("./utils/ExpressError");
const {reviewSchema} = require("./schema");
const mongoose = require('mongoose');

const { parseArgs } = require("util");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const MongoStore = connectMongo.default || connectMongo;

const userRouter = require("./routes/user");
const listings = require("./routes/listing");
const reviews = require("./routes/review");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = getMongoUrl();

main()
  .then(() => {
    console.log("connection was successful");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

async function main() {
  await mongoose.connect(dbUrl);
}


const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});


store.on("error",()=>{
  console.log("ERROR in mongo session Store");
});


const sessionOptions = {
              store,
               secret:process.env.SECRET,
               resave:false,
               saveUninitialized:true,
               cookie:{
                expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
                maxAge : 7 * 24 * 60 * 60 * 1000,
                httpOnly : true,
               }
};




function getMongoUrl() {
  const atlasUrl = process.env.ATLASDB_URL;

  if (!atlasUrl) {
    throw new Error("ATLASDB_URL is missing from environment variables.");
  }

  if (atlasUrl.startsWith("mongodb+srv://")) {
    // Atlas SRV lookups can fail on some local resolvers, so prefer public DNS.
    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    const mongoUrl = new URL(atlasUrl);
    if (!mongoUrl.pathname || mongoUrl.pathname === "/") {
      mongoUrl.pathname = "/wanderlust";
    }

    return mongoUrl.toString();
  }

  return atlasUrl;
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/",userRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});


// home route
// app.get("/", (req, res) => {
//   res.send("working properly");
// });

 
// 404 handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// error handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  // res.status(status).send(message);
  res.status(status).render("error.ejs",{err});
});
