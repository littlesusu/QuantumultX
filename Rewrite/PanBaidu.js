# > 应用名称：墨鱼自用百度网盘SVIP+去开屏广告脚本
# > 脚本作者：@ddgksf2013
# > 微信账号：墨鱼手记
# > 更新时间：2023-07-30
# > 下载地址：https://apps.apple.com/cn/app/id547166701
# > 通知频道：https://t.me/ddgksf2021
# > 贡献投稿：https://t.me/ddgksf2013_bot
# > 问题反馈：ddgksf2013@163.com
# > 特别提醒：请勿分享他人！！
# > 解锁功能：百度网盘SVIP（解锁倍速超清会员权益）+去开屏广告、通用广告


[rewrite_local]

# > 百度网盘_开屏广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/api\/getsyscfg url script-response-body https://raw.githubusercontent.com/littlesusu/QuantumultX/master/Rewrite/PanBaidu.js
# > 百度网盘_设置信息流@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject-200
# > 百度网盘_通用广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad url reject-200
# > 百度网盘_活动推广@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200
# > 百度网盘_会员权益@ddgksf2013
^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?app_id url script-response-body https://raw.githubusercontent.com/littlesusu/QuantumultX/master/Rewrite/PanBaidu.js

[mitm]

hostname = pan.baidu.com
