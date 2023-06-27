import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou Carlos, o *assistente virtual* do Fictícius Açaí. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2️⃣ - ```VERIFICAR TAXA DE ENTREGA```\n0️⃣ - ```FALAR COM ATENDENTE```';
  },
};
