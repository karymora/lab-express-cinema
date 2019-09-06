const {
  model,
  Schema
} = require('mongoose')
const movieSchema = Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  }, {
    timestamps: true,
    versionKey: false
  }


)


module.exports = model('movie', movieSchema)