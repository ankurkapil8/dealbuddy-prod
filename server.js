const express           = require('express');
const app               = express();
const path              = require('path');
const port              = process.env.PORT || 4080;


// public dir for react
app.use(express.static('public'));



// If no API routes are hit, send the React app
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, './public/index.html'));
});



// if the site is wrong
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});


// start the server
app.listen(port, (err)=>{

    if(err){
        console.log(err);
    }else{
        console.log('Server has started on port '+ port);
    }

});