const { Router } = require('express')
const route = Router()

route.get('/', (req, res) => res.render('index'))

route.get('/404', (req, res) => res.render('pages/error404'))

route.get('/chat', (req, res) => {
    res.render('pages/chat', {
        username: req.session.username
    })
})

route.post('/', (req, res) => {
    const { username } = req.body
    if (!username) return res.redirect('/404')

    // if (usernames.indexOf(username) !== -1)return res.render('index', {
    //     messageError: true
    // })

    // req.session.username = username
    // usernames.push(username)
    // res.redirect('/chat')
})

module.exports = route