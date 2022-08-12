// Controlar el servidor
const socketController = (socket)=>{
    console.log("Cliente conectado", socket.id)

    socket.on('chat:message', (payload, callback)=>{
        console.log("un cliente envio un mensaje")
        callback()
        //console.log(socket)
        socket.emit('chat:message', payload)
        socket.broadcast.emit('chat:message', payload)
        //io.emit('chat:message', payload)
    })

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data)
    })

        socket.on('disconnect', ()=>{
        console.log('cliente desconectado', socket.id)
    })

}


module.exports = {
    socketController
}
