const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

var images = [];
request('https://www.daddiesboardshop.com/longboard', function(err,res,body){
  if(!err){
    var $ = cheerio.load(body);
    $('img').each(function(){
      var img = $(this).attr('src');
      images.push(img);

    })
    console.log(images);
console.log('reacted');
  }

})



app.listen(8000,()=>{
  console.log('show time, folks.');
})
