const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { response, request } = require('express');
const stripe = require("stripe")('sk_test_51LEvKYSGAbL3wbW6ZoTiayc3J4pbbVUS8fHCHxlH8xjPWtOjlwscG4jAyDoHKywkctPPIp85nhXInaKbXw4Ya3yl00RVNPJkqf')


// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World!'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOMMMM!!!!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen Command
exports.api = functions.https.onRequest(app)



// http://localhost:5001/ecommerce-website-2f168/us-central1/api

