const mongoose = require('mongoose');
const Schema = mongose.Schema;

const horario = new Schema ({
    salaoID:{
        type:mongoose.Types.ObjectId,
        ref: 'Salao',
        require:true,
    },
    especialidades:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Servicos',
        require:true,
    },],
    colaboradores:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Colaborador',
        require:true,
    },],

    dias:{
        type: [Number],
        require:true,
    },
    inicio:{
        type:Date,
        required:true,
    },
    fim:{
        type:Date,
        required:true,
    },
});


module.exports = mongoose.model('Horario', horario);
