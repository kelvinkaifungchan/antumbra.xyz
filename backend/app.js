require("dotenv").config();

//DB
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig)

//Express
const express = require("express");
const cors = require('cors');
const path = require('path');
// const fs = require('fs');
const app = express();
const http = require('http').createServer(app);
// const https = require('https');
app.use(cors());

// Services
const AArchitectureService = require("./services/aarchitectureService")
const aarchitectureService = new AArchitectureService(knex)
const ArticleService = require("./services/articleService")
const articleService = new ArticleService(knex)
const ArchiveService = require("./services/archiveService")
const archiveService = new ArchiveService(knex)
const BridgeService = require("./services/bridgeService")
const bridgeService = new BridgeService(knex)

//Routers
const AArchitectureRouter = require("./routers/aarchitectureRouter");
app.use("/api/aarchitecture", new AArchitectureRouter(aarchitectureService, articleService, archiveService).router());
const AdminRouter = require("./routers/adminRouter");
app.use("/api/admin", new AdminRouter(aarchitectureService, articleService, bridgeService).router());

//Setup Server
http.listen(8080, () => {
  console.log("app listening on port 8080");
});

// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert', 'antumbra_xyz.crt')),
//   ca: fs.readFileSync(path.join(__dirname, 'cert', 'antumbra_xyz.ca-bundle'))
// }
// https.createServer(options, app).listen(443, "antumbra.xyz");
