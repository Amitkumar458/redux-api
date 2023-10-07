const express = require('express');
const pool = require('../connection/conn');
const routers = express.Router();

routers.post('/post' , async (req , res) => {
    try {
        const data = await pool.query(`insert into postdata (name , title , description) values ('${req.body.name}', '${req.body.title}' , '${req.body.description}') RETURNING *`);
        res.status(200).json({status:true , data:data});
    } catch (err) {
        console.log(err);
        res.status(500).json({status : false});
    }
});

routers.get('/get' , async (req , res) => {
    try {
        const data = await pool.query('select * from postdata');
        res.status(200).json({ status:true , data : data});
    } catch (err) {
        res.status(200).json({status:false , data : {}});
    }
})

module.exports = routers;