const schedule = require('node-schedule')
const sendMail = require('./sendMail')
const { getCount, getOrder } = require('../controller/remind')
let NEW_ORDER_COUNT = -1

const rule = new schedule.RecurrenceRule();
const times = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
rule.second = times //每5秒执行一次
// rule.minute = times  //每5分钟执行一次

let flag = true  //第一次

schedule.scheduleJob(rule, async () => {

    //获取数据库
    const orderCount = await getCount()

    if (flag) {
        NEW_ORDER_COUNT = orderCount
        flag = false
    }

    if (!flag) {
        if (orderCount > NEW_ORDER_COUNT) {
            const order = await getOrder()

            let toNames = ['93332033@qq.com', '1650959006@qq.com'] //,'9969657@qq.com', 'yokoyang@junshow.cn'
            let orders = {
                store_name: order.store_name,
                store_phone: '15558198169',
                store_city: '杭州',
                store_address: '杭州江干区华媒科创园',
                name: order.name,
                phone: order.phone,
                order_num: order.order_num,
                pay_num: order.pay_num,
                pay_time: '2019-12-05 10:10:00'
            }
            const mailResult = await sendMail(toNames, orders)
            NEW_ORDER_COUNT = orderCount
            if(mailResult.errno !== 0) {
                console.log(`${new Date()}:叮咚~ 您有新的订单，邮件发送失败！错误信息：${mailResult.msg}`)
                return
            }
            console.log(`${new Date()}:叮咚~ 您有新订单，已发邮件通知 ~`)
        } else {
            console.log(`${new Date()}:没有新订单！`)
        }
    }
})