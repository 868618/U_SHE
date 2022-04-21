import http from "@/tool/http.js"

const login = data => http.post('login/wechat/xcx', data)

export default login