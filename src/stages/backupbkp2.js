//buscar se já tem uma pessoa 
const encontrado = pessoas.find(element => element.telefone == message.from);

if (encontrado) {

    const indice = pessoas.findIndex(element => element.telefone == message.from);

    if (encontrado.momento == 0) { //momento de pegar o endereço
        var endereco = message.text;
        pessoas[indice].endereco = endereco;
        console.log(pessoas);
        responder(client, message.from, `Confirma seu endereço \n ${endereco}\n 1- SIM. 2- NÃO.`);
        pessoas[indice].momento = 1;
        return;
    }

    if (encontrado.momento == 1) { //momento de confirmar o endereço
        if (message.text != '1' && message.text != '2') {
            const indice = pessoas.findIndex(element => element.telefone == message.from);
            pessoas[indice].momento = 1;
            responder(client, message.from, `Opção Inválida\n 1- SIM. 2- NÃO.`);
        } else {
            if (message.text == '1') {
                pessoas[indice].momento = 2;
                responder(client, message.from, `Endereço cadastrado com sucesso!`);
                return;
            }
            if (message.text == '2') {
                pessoas[indice].endereco = '';
                pessoas[indice].momento = 0;
                responder(client, message.from, `Informe seu endereço completo novamente por favor.`);
            }
        }
        console.log(pessoas);
    }


    if (encontrado.momento == 2) {
        responder(client, message.from, `Agora vamos fazer seu pedido escolha os itens:.`);
    }


}

//adiciono o item no array
if (!encontrado) {
    var pessoaNova = { telefone: message.from, nome: message.sender.pushname, endereco: '', momento: 0 };
    pessoas.push(pessoaNova);
    console.log(`Pessoa ${pessoaNova.nome} adicionada.`);
    responder(client, message.from, `Olá ${pessoaNova.nome} sou seu atendente virtual.\n
  Antes de iniciar, me informe seu endereço completo, por favor`);
} else {
    responder(client, message.from, `Olá ${pessoaNova.nome}, seja bem vindo novamente.\n
  Segue o nosso cardápio...`);
}

console.log(`Quantidade de pessoas registradas: ${pessoas.length}`);

//console.log(pessoas);