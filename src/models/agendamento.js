const mongoose = require('mongoose');
const Schema = mongose.Schema;

const agendamento = new Schema ({
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
    servicoID:{
        type:mongoose.Types.ObjectId,
        ref: 'Servico',
        require:true,
    },
    colaboradorID:{
        type:mongoose.Types.ObjectId,
        ref: 'Colaborador',
        require:true,
    },
    data:{
        type:date,
        required:true,
    },
    comissao:{
        type:Number,
        required:true,
    },
    valor:{
        type:Number,
        required:true,
    },
    transactionID:{
        type:String,
        required:true,
    },


    dataCadastro:{
        type: Date,
        default: Date.now,
    },
   
});


module.exports = mongoose.model('Agendamento', agendamento);