const epxpress=require("express")


const router=epxpress.Router()


router.get("/user",(req,res)=>{
res.status(200).send("all user")
})

router.post("/login",(req,res)=>{
    const data=req.body
    console.log(data)
res.status(200).send(data)
})
module.exports=router