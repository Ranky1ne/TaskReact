import express from "express";
import path from "path";
import session from "express-session";
import { initDb } from "./db.js";
import bodyParser from "body-parser";
import Joi from "joi";
import cors from 'cors';


export const __dirname = path.resolve();
const app = express();
const { db, createUser, auth, createUrl, getTableData, searchUrl } = initDb();
const PORT = 3001;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const sessionChecker = (req, res, next) => {
  console.log(`Session Checker: ${req.session.id}`.green);
  console.log(req.session);
  if (req.session.profile) {
    console.log(`Found User Session`);
    next();
  } else {
    console.log(`No User Session Found`);
    res.redirect("/login");
  }
};

app.get("/tableData",sessionChecker,  function (req, res, next){
  try {
  const {login} = req.session.profile;
  const data = getTableData(login);
  res.json(data);
  } catch(error){
    res.status(400).send(error.message);
  }
  
});

app.get('/task/:id',  function (req, res){
  try{
  const path = req.originalUrl;
  const largeUrl = searchUrl(path);
  res.redirect(largeUrl);
  } catch(error) {
    res.status(400).send(error.message);
  }
  });
 

app.post("/newUrl", sessionChecker, function (req, res, next) {
 try {
  const {login} = req.session.profile;
  const {largeUrl} = req.body;
  const host = req.protocol + '://' + req.get('host')+'/task/';
  const smallUrl = createUrl(login, largeUrl, host);
  res.json({login, largeUrl, smallUrl});
} catch (error) {
  res.status(400).send(error.message);
}
});

app.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const userSchema = Joi.object().keys({
    email: Joi.string().email().min(5).max(30).required(),
    password: Joi.string().alphanum().min(8).max(50).required(),
  });
  const loginDetails = {
    email,
    password,
  };
  const { error } = userSchema.validate(loginDetails);
  if (!error) {
    try {
      const profile = auth(email, password);
      if (profile) {
        req.session.profile = profile;
        res.redirect("/");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(400).send(error.details.map((e) => e.message).join("\n"));
  }
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const userSchema = Joi.object().keys({
    email: Joi.string().email().min(5).max(30).required(),
    password: Joi.string().alphanum().min(8).max(50).required(),
  });
  const loginDetails = {
    email,
    password,
  };
  const { error } = userSchema.validate(loginDetails);
  if (!error) {
    try {
      createUser(email, password);
      res.redirect("http://localhost:3000");
    } catch (error) {
      res.status(400).send("User already exist");
    }
  } else {
    res.status(400).send(error.details.map((e) => e.message).join("\n"));
  }
});

app.listen(PORT, async (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server started on port ${PORT}`);
});
