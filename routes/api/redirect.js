const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    const url = 'https://www.testhq.com/'
    return res.redirect(url);
});

module.exports = router;