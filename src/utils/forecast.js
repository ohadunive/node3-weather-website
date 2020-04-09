const request = require('request');

const forecast = (longtitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bfdbd0d58ffc55a334044bb142ffa482/'+latitude+','+longtitude+'?units=si';
    request({url : url, json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to weather server',undefined);
        } else if(response.body.error){
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,   response.body.daily.data[0].summary+' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability+'% chance of rain');
        }
    });
}
   
    
    

module.exports = forecast;