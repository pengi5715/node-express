// imageRouter.js
import { Router } from "express";
import axios from "axios";

var client_id = 'j8PIiTpiuPi6PzcQD4MV';  //Client ID
var client_secret = 'DuZ9KkT_ZH';  //Client Secret

export const imageRouter = Router();

function bookSearch(req, res, next) {
  const api_url =
    "https://openapi.naver.com/v1/search/book.json?query=" +
    encodeURI(req.query.query);
  axios
    .get(api_url, {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    })
    .then((data) => {
      res.send(data.data.items);
    })
    .catch((err) => next(err));
}

imageRouter.get("https://port-0-node-express-fhkg2nlk6gtfkp.sel4.cloudtype.app/", bookSearch);


/*
var express = require('express');
var router = express.Router();

/* 주석임 GET home page.
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
*/
