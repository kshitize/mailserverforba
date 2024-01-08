const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register",(req,res)=>{
    email=["kshitize@aai.aero","explorerkd@gmail.com","kshitizedimri@gmail.com"];

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"kshitizedimri@gmail.com",
                pass:"gubx vvmf zuep zuzj"
            }
        });

        const mailOptions = {
            from:"kshitizedimri@gmail.com",
            to:email,
            subject:"Random BA Test",
            html:'<h1>You have been selected for BA Test</h1>'
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("error",error)
            }else{
                console.log("mail sent");
                res.status(201).json({status:201,info})
            }
        })
        
    } catch (error) {
        res.status(201).json({status:401,info})
    }

})

module.exports = router;