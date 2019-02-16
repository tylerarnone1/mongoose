var mongoose = require('mongoose');

var  Schema = mongoose.Schema;

var flightsSchema = new Schema({
    Flightnumb: {
        type : Number,
        required: true},
    Destination: {
        type: String,
        required: true
          },
          Airline: {
              type : String,
          required: true
          }, 
    onTime: {type:Boolean,
        default:  false}
},{ timestamps: true
});


module.exports = mongoose.model(
    'Flight', flightsSchema

);