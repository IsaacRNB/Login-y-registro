'use strict'

const Sensor = use('App/Models/sensor')
const mongoose = require("mongoose");


class SensorController {

    async store ({request, response}) {
        try {

            const data = request.all()
            const sensor = new Sensor()
            sensor.nombre = data.nombre

            await sensor.save()
            return response.status(201).json(sensor)
            
        } catch (error) {

            console.log(error)
            
        }
    }
}

module.exports = SensorController
