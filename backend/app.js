require("dotenv").config();

//Express
const fileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const http = require('http').createServer(app);

// Services
const AArchitectureService = require("./services/aarchitectureService")
const aarchitectureService = new AArchitectureService(knex)
const ArticleService = require("./services/articleService")
const articleService = new ArticleService(knex)

//Routers
const AArchitectureRouter = require("./routers/aarchitectureRouter");
app.use("/api/aarchitecture", new AArchitectureRouter(aarchitectureService).router());
const AdminRouter = require("./routers/adminRouter");
app.use("/api/admin", new AdminRouter(articleService).router());

//Setup Server
http.listen(8080, () => {
  console.log("app listening on port 8080");
});