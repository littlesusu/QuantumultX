# 此远程订阅用于解决QX任务脚本的cookie获取，仅适用于QX 1.0.10及更高版本，您可在使用后手动将其禁用，以避免无意义的MITM。

hostname = ifac*.iqiyi.com, www.52pojie.cn, c.tieba.baidu.com, api.m.jd.com, passport.biligame.com

# 爱奇艺 cookie
^https?:\/\/iface(\d)?\.iqiyi\.com\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

# 吾爱破解 cookie
https:\/\/www\.52pojie\.cn\/home\.php\?mod=space url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js

# 百度贴吧 cookie
https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js

# 京东 cookie
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 哔哩哔哩漫画 Get cookie
^https:\/\/passport\.biligame\.com\/api\/login\/sso.+?version%22%3A%22(3|4|5) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js
