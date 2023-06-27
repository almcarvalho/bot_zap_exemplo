// client.sendText(message.from, "oi").then(() => {
      //   console.log('Message sent.');
      // }).catch(error => console.error('Error when sending message', error));

      // switch (message.text) {
      //   case '1':
      //     client.sendVoice(message.from, './teste.mp3').then((result) => {
      //       console.log('Result: ', result); //return object success
      //     }).catch((erro) => {
      //       console.error('Error when sending: ', erro); //return object error
      //     });
      //     break;

      //   case '2':
      //     // Send Messages with Buttons Reply
      //     const buttons = [
      //       {
      //         "buttonText": {
      //           "displayText": "Text of Button 1"
      //         }
      //       },
      //       {
      //         "buttonText": {
      //           "displayText": "Text of Button 2"
      //         }
      //       }
      //     ]
      //     client.sendButtons(message.from, 'Title', buttons, 'Description')
      //       .then((result) => {
      //         console.log('Result: ', result); //return object success
      //       })
      //       .catch((erro) => {
      //         console.error('Error when sending: ', erro); //return object error
      //       });

      //     break;

      //   case '3':
      //     //-10.7922474, -37.7556548
      //     client.sendLocation(message.from, '-10.7922474', '-37.7556548', 'Brasil')
      //       .then((result) => {
      //         console.log('Result: ', result); //return object success
      //       })
      //       .catch((erro) => {
      //         console.error('Error when sending: ', erro); //return object error
      //       });
      //     break;

      //   case '4':
      //     client
      //       .sendLinkPreview(
      //         message.from,
      //         'https://www.policeweb.com.br',
      //         'Software policial para GTAV-Fivem'
      //       )
      //       .then((result) => {
      //         console.log('Result: ', result); //return object success
      //       })
      //       .catch((erro) => {
      //         console.error('Error when sending: ', erro); //return object error
      //       });
      //     break;


      //   case '5':
      //     client
      //       .sendImage(
      //         message.from,
      //         './lucas.jpg',
      //         'image-name',
      //         'O dia que fui na casa do Steve!'
      //       )
      //       .then((result) => {
      //         console.log('Result: ', result); //return object success
      //       })
      //       .catch((erro) => {
      //         console.error('Error when sending: ', erro); //return object error
      //       });
      //     break;

      //   case '6':
      //     client
      //       .sendFile(
      //         message.from,
      //         './pdftest.pdf',
      //         'file_name',
      //         'Vou te mandar um pdf, dá uma olhada!'
      //       )
      //       .then((result) => {
      //         console.log('Result: ', result); //return object success
      //       })
      //       .catch((erro) => {
      //         console.error('Error when sending: ', erro); //return object error
      //       });
      //     break;

      //   case '7':
      //     client.setProfileStatus('Josh - Tô on! Manda ver! ✈️');
      //     client.sendText(message.from, "Status do perfil alterado!").then(() => {
      //       console.log('Message sent.');
      //     }).catch(error => console.error('Error when sending message', error));
      //     break;

      //   case '8':
      //     client.setProfileStatus('Josh - Estamos fechados!!! abriremos amanhã as 9h horas!');
      //     client.sendText(message.from, "Status do perfil alterado!").then(() => {
      //       console.log('Message sent.');
      //     }).catch(error => console.error('Error when sending message', error));
      //     break;

      //   case '9':
      //     client.setProfilePic('./store-open.jpg');
      //     client.sendText(message.from, "Foto de perfil aberto").then(() => {
      //       console.log('Message sent.');
      //     }).catch(error => console.error('Error when sending message', error));
      //     break;

      //   case '10':
      //     client.setProfilePic('./store-close.jpg');
      //     client.sendText(message.from, "Foto do perfil fechado").then(() => {
      //       console.log('Message sent.');
      //     }).catch(error => console.error('Error when sending message', error));
      //     break;



      //   default:
      //     var menu = '👋 Olá, como vai? \n\nEu sou o Josh, o *assistente virtual* do Fictícius Store. \n*Posso te ajudar?* 🙋‍♂️ \n *Escolha uma opção de 1 a 10* \n-----------------------------------\n1 - ```ENVIE AUDIO``` \n2 - ```MANDE BOTÕES```\n3 - ```LOCALIZAÇÃO```\n4 - ENVIE UM LINK\n5 - ENVIE UMA IMAGEM\n6 - ENVIE UM PDF\n7 - TROQUE O STATUS DO MEU PERFIL\n8 - VOLTE O STATUS DO MEU PERFIL\n9 - FOTO PERFIL ABERTO\n10 - FOTO PERFIL FECHADO - ```FALAR COM ATENDENTE - 0```';
      //     client.sendText(message.from, menu).then(() => {
      //       console.log('Message sent.');
      //     }).catch(error => console.error('Error when sending message', error));
      //     break;
      // }