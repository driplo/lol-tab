const express = require('express');
const axios = require('axios');
const apicache = require('apicache');

const app = express();
const cache = apicache.middleware;

const CLIENT_ID = '6i4kxfbaa79krvn57chzrd3m1vcn3g';
const GAME = 'League Of Legends';
const API_ENDPOINT = 'https://api.twitch.tv/kraken';
const LOL_STREAMS_URI = encodeURI(`${API_ENDPOINT}/streams/?game=${GAME}`);

console.log(LOL_STREAMS_URI);
app.get('/', cache('20 seconds'), (req, res) => {
    axios.get(LOL_STREAMS_URI, { headers: { 'Client-ID': CLIENT_ID } })
      .then((response) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.send(response.data.streams)
      })
      .catch((error) => console.log(error));
});

app.listen(3001);
console.log('Server Running...');