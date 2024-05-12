const mongoose = require('mongoose');
const Schema = mongose.Schema;

const salaocolaborador = new Schema ({
    salaoID:{
        type:mongoose.Types.ObjectId,
        ref: 'Salao',
        require:true,
    },
   
    colaboradorID:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Colaborador',
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


module.exports = mongoose.model('Salaocolaborador', salaocolaborador);