'use strict'

const _ = require('lodash')
const Policy = require('trails-policy')

/**
 * Footprint Policy
 *
 * Validate footprint reqs; namely, that the path parameters represent
 * actual and correct models anda actions. Semantic ORM input validation is
 * performed by the FootprintService.
 *
 * @see http://expressjs.com/en/4x/api.html#req
 */
module.exports = class Footprint extends Policy {
}
