const mongoose = require('mongoose');
const Schema = mongose.Schema;

const colaboradorservico = new Schema ({
    salaoID:{
        type:mongoose.Types.ObjectId,
        ref: 'Salao',
        require:true,
    },
   
    servicoID:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Servico',
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


module.exports = mongoose.model('Colaboradorservico', colaboradorservico);