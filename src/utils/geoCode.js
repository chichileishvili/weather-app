const request = require('request')

const geoCode = (addres, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(addres) +
    '.json?access_token=pk.eyJ1IjoiZ2lvY2hpY2hvIiwiYSI6ImNsbmFncjVyaDAzZnoya28zamRpZ2VmeDQifQ.iQ86bVRinOyt6qMfUYgHkg&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('unable to find location,try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geoCode
