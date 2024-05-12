const mongoose = require('mongoose');
const Schema = mongose.Schema;

const salao = new Schema ({
nome: {
    type:String,
    require:[true, 'nome é obrigatório.']
},
foto: String,
capa: String,
email:{
    type:String,
    require:[true, 'e-mail é obrigatório.']
},
senha:{
    type:String,
    default: null,
},
endereco:{
    cidade:String,
    uf:String,
    cep:String,
    cep:String,
    numero:String,
    pais:String,
},
geo:{
    tipo:String,
    coordinates:Array,
},
dataCadastro:{
    type: Date,
    default: Date.now,
},
});

salao.index({geo: '2dsphere'})

module.exports = mongoose.model('Salao', salao);
