const express = require("express");

const router = express.Router();

const axios = require("axios").default

router.get("/", (req, res) => {
    const url = 'https://www.testhq.com/'
    const response = axios.get(url).then(response => {
        var html = response.data
        let replacedHtml = html.replaceAll('Get Started', 'Hello World');
        res.send(replacedHtml)
    })

});

module.exports = router;