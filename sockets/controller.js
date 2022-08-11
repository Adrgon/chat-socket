// Controlar el servidor
const socketController = (socket)=>{
    console.log("Cliente conectado", socket.id)

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado', socket.id)
    })

    socket.on('enviar-mensaje', (payload, callback)=>{
        console.log("un cliente envio un mensaje")
        const id = 123456789
        callback(id)
        
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}


module.exports = {
    socketController
}
