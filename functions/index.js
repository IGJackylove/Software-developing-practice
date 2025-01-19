import './style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("App is running..");
});

app.use("/.netlify/functions/index", router);
module.exports.handler = serverless(app);



const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM({
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

console.log("map created")
