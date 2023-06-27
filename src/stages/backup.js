const currentStage = getStage({ from: message.from });

const messageResponse = stages[currentStage].stage.exec({
    from: message.from,
    message: message.body,
    client,
});

if (messageResponse) {
    client.sendText(message.from, messageResponse).then(() => {
        console.log('Message sent.');
    }).catch(error => console.error('Error when sending message', error));
}



