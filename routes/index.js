const express = require('express')
const router = express.Router()

const axios = require('axios')

const client_id = 'j8PIiTpiuPi6PzcQD4MV'
const client_secret = 'DuZ9KkT_ZH'

function searchBooks(req, res) {
  const query = req.query.query
  const api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}`
  axios.get(api_url, {
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  })
  .then(response => {
    res.send(response.data.items)
  })
  .catch(error => {
    console.log(error)
    res.status(500).send('Internal Server Error')
  })
}

router.get('/books', searchBooks)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;


/*
var express = require('express');
var router = express.Router();

/* 주석임 GET home page.
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
*/
