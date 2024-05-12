const mongoose = require('mongoose');
const Schema = mongose.Schema;

const cliente = new Schema ({
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

documento:{
    tipo:{
        type:String,
        enun:['individual','coporation'],
        required:true,
    },
    numero:{
        type:String,
        require: true    
    }
},

endereco:{
    cidade:String,
    uf:String,
    cep:String,
    cep:String,
    numero:Strung,
    pais:String,
},
dateCadastro:{
    type:Date,
    default:date.now,
}

});

module.exports = mongoose.model('Cliente', cliente);
