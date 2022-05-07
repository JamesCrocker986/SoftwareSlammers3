'use strict';

const mongoose = require( 'mongoose' );

var subscriberSchema = mongoose.Schema( {
  name: String,
  email: String,
  studentID: Number
} );

module.exports = mongoose.model( 'Subscriber', subscriberSchema );
