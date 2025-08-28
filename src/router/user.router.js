const epxpress = require("express")
const User = require("../model/User.model")


const router = epxpress.Router()


router.get("/user", (req, res) => {
    res.status(200).send("all user")
})

router.post("/login", async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        // const user = await User.create(data)
        // res.send(user)
    } catch (err) {
        console.log(err)
    }
    res.status(200).send(data)
})



module.exports = router