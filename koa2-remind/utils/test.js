const sendMail = require('../utils/sendMail')

let toNames = ['93332033@qq.com','1650959006@qq.com'] //,'9969657@qq.com'

let orders = {
    store_name:'波比跳快闪店',
    name: 'clare',
    phone: '15558198169'
}

const mailInfo = sendMail(toNames,orders)
mailInfo.then((data) => {
    console.log(data)
})
