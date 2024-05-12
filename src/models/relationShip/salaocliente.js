const mongoose = require('mongoose');
const Schema = mongose.Schema;

const salaocliente = new Schema ({
    salaoID:{
        type:mongoose.Types.ObjectId,
        ref: 'Salao',
        require:true,
    },
   
    clienteID:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Cliente',
        require:true,
    },],
    status:{
        type:String,
        enun:['a','i'],
        require:true,
        default:'a'
    },
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
    
});


module.exports = mongoose.model('Salaocliente', salaocliente);