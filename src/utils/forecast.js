const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a47a1b130bf3707fe112004b7d443c25/' + latitude + ',' + longitude + '?units=si&lang=en'
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('weather service DC', undefined)
        }else if (body.error){
            callback('DC location', undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. there is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast