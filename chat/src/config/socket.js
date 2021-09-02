module.exports = ({ server }) => {
    const { Server } = require("socket.io");
    const io = new Server(server);
    let users = []
    const colors = ['danger', 'success', 'primary', 'warning']

    const getColor = lastUser => {
        let index
        if (!lastUser) return 0
        const { color } = lastUser
        colors.forEach((cl, i) => {
            if (cl === color) {
                if (i === colors.length - 1) index = 0
                else index = i + 1
            }
        })
        return index
    }

    io.on('connection', socket => {
        console.log('Done connection');
        const { id } = socket
        
        socket.on('username emit', (username, cb) => {
            const usernames = users.map(({ username }) => username)
            if (usernames.indexOf(username) !== -1) cb({ response: false })
            else {
                const lastUser = users[users.length - 1]
                users.push({ id, username, color: colors[getColor(lastUser)] })
                cb({ response: true })
            }
        })

        socket.on('message', data => {
            const { username, message } = data
            users.map(e => {
                if (e.username === username) {
                    io.emit('new message', { user: e, message });
                }
            })
        })

        socket.on('disconnect', response => {
            users = users.filter(e => e.id !== id)
            console.log('User disconnected');
        });
    });
}

