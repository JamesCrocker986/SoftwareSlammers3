'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  testController = require( './controllers/testController' ),
  errorController = require( './controllers/errorController' ),
  bodyParser = require( 'body-parser' ),
  mongoose = require( 'mongoose' ),
  subscribersController = require( './controllers/subscribersController.js' );

  mongoose.connect( 'mongodb://localhost/software_slammersdb',
    {useNewUrlParser: true, useUnifiedTopology: true} );

app.set( 'port', process.env.PORT || 3000 );

app.set( 'view engine', 'ejs' );
app.use( layouts );
app.use( express.static( 'public' ) );

app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( bodyParser.json() );

app.get( '/', ( req, res ) => {
  res.render( 'home' );
} );

app.get( '/testResults', testController.showtestResults );
app.get( '/addTest', testController.showaddTest );
app.post( '/addTest', testController.postedaddtestForm );
app.get( '/contact', subscribersController.getSubscriptionPage );
app.post( '/subscribe', subscribersController.saveSubscriber );

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
