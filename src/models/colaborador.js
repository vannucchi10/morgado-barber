const mongoose = require('mongoose');
const Schema = mongose.Schema;

const colaborador = new Schema ({
nome:{
    type:String,
    require:true,
},
telefone:{
    type:String,
    require:true,
},
email:{
    type:String,
    require:true,
},
senha:{
    type:String,
    require:true,
},
foto:{
    type:String,
    require:true,
},
datanascimento:{
    type:String,
    require:true,
},
sexo:{
    type:String,
    enun:['m','f'],
    require:true,
},
status:{
    type:String,
    enun:['a','i'],
    require:true,
    default:'a'
},

contaBancaria:{
titular:{
    type:String,
    require:true,
},
CpfCnpj:{
    type:String,
    require:true,
},
banco:{
    type:String,
    require:true,
},
tipo:{
    type:String,
    require:true,
},
agencia:{
    type:String,
    require:true,
},
numero:{
    type:String,
    require:true,
},
digitoVerificador:{
    type:String,
    require:true,
},
},
recipientID:{
    type:String,
    required:true,
},

dateCadastro:{
    type:Date,
    default:date.now,
}

});

module.exports = mongoose.model('Colaborador', colaborador);
