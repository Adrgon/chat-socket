// Referencias

const txtOnline = document.querySelector('#txtOnline')
const txtOffline = document.querySelector('#txtOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')



const socket = io();

socket.on('connect', ()=>{
    console.log('conectado')

    txtOffline.style.display = 'none'
    txtOnline.style.display = ''

})

socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor')

    txtOffline.style.display = ''
    txtOnline.style.display = 'none'
})

socket.on('enviar-mensaje', (payload)=> {
    console.log(payload)
})

// Envio de mensaje
btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '155B7',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    })
})
