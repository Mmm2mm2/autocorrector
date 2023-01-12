const express = require("express")
const router = express.Router();
const AutocorrectorService = require("../service/autocorrector.js")

const STATUS_SUCCESSFUL = 200

router.get("/" ,(req,res) =>{
    res.status(STATUS_SUCCESSFUL).json({
        status: res.statusCode,
        message: "api autocorrector"
    })
})


router.post("/autocorrector",AutocorrectorService)


module.exports = router
