const app = require('./../server.js');
var db = app.get('db');

let cart = [];
let total = 0;

module.exports = {

  filterColors: (req,res) => {

  	if(req.query.color){
  		const color = req.query.color;
  		db.getLongboardsByColor(["%"+color+"%"], (err,longboardByColor) => {
  			res.send(longboardByColor);
  		})
  	}else{
  		db.getLongboards((err,longboards) => {
  			res.send(longboards);
  		})
  	}
  },
  getSingleBoard: (req,res) => {
  	// console.log(req.params.id);
  	db.getSingleBoard([req.params.id], (err,singleBoard) => {
  		res.send(singleBoard);
  	})
  },

  addToCart: (req,res) => {


    let product = req.body.product;


    cart.push(product);
    for(let x = 0;x<cart.length;x++){
      if(cart[x] ===undefined){
        cart.splice(x,1);
      }

    }



    total = 0;
    for(let x = 0;x<cart.length;x++){
      total += cart[x].price;
    }


    res.status(200).send([cart,total]);
  },

  removeBoard: (req,res) => {
    console.log(req.body.product.id);


    for(let i =0;i<cart.length;i++){
      if(cart[i].id === req.body.product.id){
        cart.splice(i,1);
      }
    }
    console.log(cart)
    total = 0;
    for(let x = 0;x<cart.length;x++){
      total += cart[x].price;
    }

    res.status(200).send([cart,total])
  }

}
