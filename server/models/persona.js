const mongoose = require('mongoose')
const utenteAutenticatoSchema = require('uAutenticato')

const personaSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  cognome: {type: String, required: true},
  telefono: {type: String, required: true},
  dataNascita: {type: String, required: true},
  prenotazioni: {type: String, required: true},
  annunciPubblicati: {type: String, required: true},
  base: {type: utenteAutenticatoSchema, required: true}
})

module.exports = mongoose.model('Persona', personaSchema);