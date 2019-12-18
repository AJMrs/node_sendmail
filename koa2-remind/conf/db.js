let env = process.env.NODE_ENV

let MYSQL_CONF

env = 'dev'

//开发
if (env === 'dev') {
    MYSQL_CONF = {
        host: '172.16.149.128',
        user: 'root',
        password: 'root123',
        port: '3306',
        database: 'burpees'
    }
}

//线上
if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root12345',
        port: '3306',
        database: 'burpees'
     }
}

module.exports = MYSQL_CONF