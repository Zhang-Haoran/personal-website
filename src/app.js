const express = require('express')
const loader = require('./loader')

const app = express()

loader.init(app)

module.exports = app
