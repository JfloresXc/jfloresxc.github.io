const socket = io();
const usernameWrap = document.querySelector('#username-wrap')
const chatWrap = document.querySelector('#chat-wrap')

const usernameInput = document.getElementById('username-input')
const formUsername = document.querySelector('#form-username')
const messageErrorUsername = document.querySelector('.username-message-error')

const message = document.getElementById('message')
const formChat = document.querySelector('#form-chat')
const boxMessages = document.getElementById('box-messages')
const username = document.getElementById('username')
const usernameList = document.querySelector('#usernames')

// USERNAME QUERY
formUsername.addEventListener('submit', e => {
    e.preventDefault()
    const { value } = usernameInput
    socket.emit('username emit', value, async ({ response }) => {
        if (!response) {
            messageErrorUsername.classList.remove('invisible')
            setTimeout(() => messageErrorUsername.classList.add('invisible')
                , [2000])
        } else {
            chatWrap.classList.remove('invisible')
            messageErrorUsername.classList.add('invisible')
            usernameWrap.classList.add('invisible')
            username.innerHTML = value
        }
    })
})

// CHAT 
formChat.addEventListener('submit', e => {
    e.preventDefault()
    if (message.value) {
        const { value } = message
        socket.emit('message', { username: username.innerHTML, message: value })
        formChat.reset()
    }
})

// SOCKET.IO
socket.on('new message', ({ user: { username, color }, message }) => {
    const list = document.createElement('li')
    list.innerHTML = `${username}: ${message}`
    list.classList.add(`item`)
    list.classList.add(`pl-2`)
    list.classList.add(`bg-${color}`)
    boxMessages.append(list)
})

socket.on('username on', response => {
    username.innerHTML = response
})
