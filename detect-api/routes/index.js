const routes = require('express').Router()

routes.get('/', async function (req, res) {
  return new Promise(function(resolve, reject) {
    const json = [
     {
        "x": 0.7502243518829346,
        "y": 0.20667922496795654,
        "w": 0.31608420610427856,
        "h": 0.18409302830696106,
        "prob": 0.7948464751243591,
        "name": "truck"
     },
     {
        "x": 0.4135103225708008,
        "y": 0.5051250457763672,
        "w": 0.6160792708396912,
        "h": 0.6109573245048523,
        "prob": 0.8468945622444153,
        "name": "bicycle"
     },
     {
        "x": 0.2994929254055023,
        "y": 0.6545103788375854,
        "w": 0.24297258257865906,
        "h": 0.5616251826286316,
        "prob": 0.775431752204895,
        "name": "dog"
     }
  ]

    console.log(json);
    resolve( res.json(json) )
  });
})

module.exports = routes
