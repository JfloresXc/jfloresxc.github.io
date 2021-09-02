const { server, app } = require('./config/server')
require('dotenv').config()

server.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})