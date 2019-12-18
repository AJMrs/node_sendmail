const nodemailer = require('nodemailer')
const MAIL_CONF = require('../conf/mail')

//设置邮箱配置 
const transporter = nodemailer.createTransport(MAIL_CONF);

function sendMail(toNames, texts = {}) {

    toNames = toNames.toString()

    //设置发送对象及内容信息
    let mailOptions = {
        from: 'bobitiao@junshow.cn',            //发送方
        to: `${toNames}`,                       //收件方
        subject: '叮咚~ 您有新的订单，请及时查看！', //主题
        // text: `门店名称：${texts.store_name}\n下单人：${texts.name}\n手机号：${texts.phone}`, //文本内容
        html: `<h2>门店：${texts.store_name}</h2>
               <h4>电话：${texts.store_phone}</h4>
               <h4>城市：${texts.store_city}</h4>
               <h4>地址：${texts.store_address}</h4>
               <h2>下单人：${texts.name}</h2>
               <h4>手机号：${texts.phone}</h4>
               <h4>订单号：${texts.order_num}</h4>
               <h4>金额：${texts.pay_num}</h4>
               <h4>支付时间：${texts.pay_time}</h4>
              `,                                //html模板
    }

    const promise = new Promise((resolve, reject) => {
        //发送邮件
        transporter.sendMail(mailOptions, (error, info) => {

            if (error) {
                reject({
                    errno: -1,
                    msg: error
                })
                return
            }
            resolve({
                errno: 0,
                msg: info.response
            })
        })
    })
    return promise
}

module.exports = sendMail