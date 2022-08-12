// Referencias

const txtOnline = document.querySelector('#txtOnline')
const txtOffline = document.querySelector('#txtOffline')
let message = document.querySelector('#message')
let username = document.querySelector('#username')
let output = document.querySelector('#output')
let actions = document.querySelector('#actions')
let btn = document.querySelector('#send')




const socket = io();

socket.on('connect', ()=>{
    console.log('conectado')

    txtOffline.style.display = 'none'
    txtOnline.style.display = ''

})

// Envio de mensaje
btn.addEventListener('click', ()=>{

    const payload = {
        message: message.value,
        username: username.value
    }

    socket.emit('chat:message', 
                payload, 
                () => { console.log('Desde el server')}
    )
})

message.addEventListener('keypress', ()=>{
    //console.log(e.key)
    socket.emit('chat:typing', username.value)
})

socket.on('chat:typing', (data)=>{
    actions.innerHTML = `<p><em>${data} is typing a message...</em></p>`
})

socket.on('chat:message', (payload)=> {
    actions.innerHTML = ''
    output.innerHTML += `
        <p><strong>${payload.username}</strong>: ${payload.message}</p>
    `           
})


socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor')

    txtOffline.style.display = ''
    txtOnline.style.display = 'none'
})
