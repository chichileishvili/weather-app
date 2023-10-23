const request = require('request')

const forecast = (addres, addres1, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=8ae957f68749f836e610ea0fd6b7f3dd&query=' +
    addres +
    ',' +
    addres1 +
    '&units=m'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('cant connect to a app', undefined)
    } else if (body.error) {
      callback('unable to find location', undefined)
    } else {
      callback(undefined, {
        weather:
          'its currently' +
          body.current.temperature +
          'C,' +
          'time is' +
          body.current.observation_time +
          '   and its' +
          body.current.weather_descriptions[0],
      })
    }
  })
}

module.exports = forecast
