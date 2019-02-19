var Flights = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
};
function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}

function index(req, res){
    Flights.find({}, function(err, flights) {
        res.render('flights/index' , { title: 'flights', flights });
        console.log("flight line");
    });
}
function create(req, res){

    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flights);
        res.redirect('/flights');
    });
}