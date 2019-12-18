const exex = require('../db/mysql')

const getCount = async () => {
    const sql = 'select count("*") from burpees;'

    const result = await exex(sql)

    return result[0]['count("*")']
}

const getOrder = async () => {
    const sql = `select * from orders order by create_time desc limit 1;`

    const result = await exex(sql)
 
    return result[0]
}

module.exports = { 
    getCount,
    getOrder
}