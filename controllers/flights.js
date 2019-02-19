var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
  new: newFlight,
  create,
  index,
  show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          //get an array with destinations excluding the flight airport and 
          //any destination airport already added
          var dest = ['AUS', 'DAL', 'LAX', 'SEA'];
          //remove flight airport from dest
          dest.splice(dest.indexOf(flight.airport), 1);
          for(var i=0; i< flight.destinations.length; i++){
            if(dest.indexOf(flight.destinations[i].airport) != -1 ){
              dest.splice(dest.indexOf(flight.destinations[i].airport), 1);
            }
          }
        res.render('flights/show', { title: 'Flight Details', flight, tickets, dest });
        });
      });
    }
        
    

function index(req, res){
    Flight.find({}).sort({departs: 1}).exec(function(err, flights){
        res.render('flights/index', { flights });
      });
  } 

function create(req, res){

    var flight = new Flight(req.body);
    console.log(req.body)
    flight.save(function(err) {
        if (err) return res.redirect('flights/new');
        
        res.redirect('/flights');
    });
}
function newFlight(req, res) {
    res.render('flights/new');
}