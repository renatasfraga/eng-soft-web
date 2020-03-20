const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/",(req, res) =>{
    res.send("Hello word from node js");
});


app.post("/token", function(req, res) {

const expiration = Math.floor(Date.now() / 1000) + (60 * 20); //20 minutos
let payload = {
    
    iat: new Date().getSeconds(),
    exp: expiration,
    user :req.body.username,
    pass :req.body.password,
    admin: true
};
var token = jwt.sign(payload, 'Gp81YLUpE}-i_%"k}jpq-/w.dWKTbyPf!c>-G~sB0Rac=4+c[hF78!&u3W7umF[', {algorithm: 'HS512'});

 
 return res.status(200).json({
   token,
   "exp":expiration
 })


});

app.listen(8080);