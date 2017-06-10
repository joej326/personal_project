const app = require('./../server.js');
var db = app.get('db');

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
    if(!req.session.cart){
      req.session.cart = [];
    }

    let product = req.body.product;


    req.session.cart.push(product);
    for(let x = 0;x<req.session.cart.length;x++){
      if(req.session.cart[x] ===undefined){
        req.session.cart.splice(x,1);
      }

    }
    let total = 0;



    for(let x = 0;x<req.session.cart.length;x++){
      total += req.session.cart[x].price;
    }


    res.status(200).send([req.session.cart,total]);
  },

  removeBoard: (req,res) => {
    
  }

}
