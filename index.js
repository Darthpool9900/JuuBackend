const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./models/User');

app.use(cors())


app.post('/register',async (req,res)=>{
    try{
        await user.create({
            id:req.query.id,
            user_name:req.query.user_name,
            user_name_email:req.query.user_name_email,
            password:req.query.password
        });
        res.json(user)
    }catch(err){
        console.log("Erro:"+err);
        res.status(500);
    }
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})