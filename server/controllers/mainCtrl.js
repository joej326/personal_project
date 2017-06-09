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
  }
}
