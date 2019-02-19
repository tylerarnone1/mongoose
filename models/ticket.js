var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
  name: {type: String, required: true, unique: true},
  price: {
      type: Number,
      min: 0
  },
  flight: {
    type: Schema.Types.ObjectId, ref: 'Flight'
}, 
});

module.exports = mongoose.model('Ticket', ticketSchema);