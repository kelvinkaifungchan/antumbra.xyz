require("dotenv").config();

//DB
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig)

//Express
const express = require("express");
const cors = require('cors');
const path = require('path');
const fs = require('fs')
const app = express();
// const http = require('http').createServer(app);
const https = require('https');
app.use(cors());

const hostname = 'penumbra.lol';
const httpsPort = 443;

const httpsOptions = {
  cert: fs.readFileSync()
}

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
const { fstat } = require("fs");
app.use("/api/admin", new AdminRouter(aarchitectureService, articleService, bridgeService).router());

//Setup Server
// http.listen(8080, () => {
//   console.log("app listening on port 8080");
// });
const httpsServer = https.createServer(httpsOptions, app)

httpsServer.listen(httpsPort, hostname);