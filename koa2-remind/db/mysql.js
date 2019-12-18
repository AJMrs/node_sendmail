const mysql = require('mysql')
const MYSQL_CONF = require('../conf/db')

const con = mysql.createConnection(MYSQL_CONF)

con.connect()

function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, val) => {
            if(err) {
                reject(err) 
                return 
            }
            resolve(val)
        })
    })
}


// const sql = `select count('id') from burpees`
// const sql = `select count(*) from burpees`
// const sql = `select * from orders order by create_time desc limit 1;`
// const result = exec(sql)
// result.then((data) => {
//     // console.log(data[0]['count(*)'])
//     console.log(data[0])
// })

module.exports = exec
