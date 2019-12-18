//邮箱配置
let MAIL_CONF

//邮箱配置
MAIL_CONF = {

    host: 'smtp.exmail.qq.com',         //邮箱服务的主机 ，如smtp.qq.com
    port: '465',                        //对应的端口号
    // secure: false,                   // 开启安全连接
    secureConnection: true,             //使用ssl
    auth: {                             //用户信息
        user: 'bobitiao@junshow.cn',
        pass: 'Darling26267916'
    }
}

module.exports = MAIL_CONF
