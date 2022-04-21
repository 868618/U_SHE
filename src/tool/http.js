import Taro from "@tarojs/taro"

class Http {

    fetch = async (url, data, method) => {
        const baseUrl = 'http://wanban.maluole.co:8022/'
        const res = await Taro.request({
            url: baseUrl + url,
            data,
            method
        })
        return res.statusCode == 200 ? res.data : Promise.reject(res)
    }

    get = (url, data, method = 'GET') => this.fetch(url, data, method)

    post = (url, data, method = 'POST') => this.fetch(url, data, method)
}


export default new Http()