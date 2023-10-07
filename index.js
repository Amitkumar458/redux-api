const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api' , require('./routes/routes'));


app.get('/' , (req , res) => {
    res.json({status:true , msg:"api is working"})
})
app.listen(port , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('server is lisling on http://locahost:3000');
    }
});
