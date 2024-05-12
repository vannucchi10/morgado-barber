const mongoose = require('mongoose');
const Schema = mongose.Schema;

const servicos = new Schema ({

    salaoID:{
        type:mongoose.Types.ObjectId,
        ref: 'salao',
        required:true,
    },

    titulo:{
        type:String,
        require:true,
    },
    preco:{
        type:Number,
        require:true,
    },
    comicao:{
        type:Number,  // porcentagem de comisão sobre o preço
        require:true,
    },
    duracao:{
        type:number, //duração por minutis
        require:true,
    },

    recorencia:{
        type:number, //periodo de que o cliente precisa voltar.
        require:true,
    },
    descricao:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        enun:['a','i','e'],
        require:true,
        default:'a'
    },

});

module.exports = mongoose.model('Servicos', servicos);
