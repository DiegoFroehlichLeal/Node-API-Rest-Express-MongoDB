import mongoose from "mongoose";

const amostraSchema = new mongoose.Schema(
    {
       
        id:{type: String},
        Data:{type: String},
        ID:{type: String},
        Contato:{type: String},
        Feature:{type: String},
        User_story:{type: String},
        Resumo_Duvida_do_Cliente:{type: String},
        Detalhamento_do_Atendimento:{type: String},
        Metodo_utilizado_pelo_atendente:{type: String},
        Solucao_apresentada_pelo_atendente:{type: String},
        Sugestao_Melhoria_agente:{type: String},
        Vertical1:{type: String},
        Vertical2:{type: String},
        Vertical3:{type: String}, 
        Vertical4:{type: String},
        Vertical5:{type: String}
        

    }
);

const amostras= mongoose.model('amostras', amostraSchema);

export default amostras;

