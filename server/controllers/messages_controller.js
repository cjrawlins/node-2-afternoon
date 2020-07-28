let messages = [];
let id = 0;

module.exports = {
    //Create Messages
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push( {id, text, time} );
        id++;
        res.status(200).send(messages)
    },
    
    //Read Messages
    read: (req, res) => {
        res.status(200).send(messages);
    },
    
    //Update Messages
    update: (req, res) => {
        const { text } = req.body;
        const updateId = req.params.id;
        const msgIndex = messages.findIndex( e => e.id == updateId );
        let message = messages[msgIndex];
        
        messages[msgIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages); 
    },
    

    //Delete Messages
    delete: (req, res) => {
        const index = messages.findIndex( e => e.id === +req.params.id )
        messages.splice(index, 1);
        res.status(200).send(messages);
    }


}
