import { wt, wx } from 'wetype-simple'
import { config } from './config'

export const checkLogin = async () => {
    let session = wx.getStorageSync('session')
    if (session) {
        return session
    }
    wx.navigateTo({ url: 'login' })
}

export const get = (url: string, data: any) => {
    return wt.request({
        url: config.hostName + url,
        method: 'GET',
        data
    })
}

export const post = (url: string, data: any) => {
    return wt.request({
        url: config.hostName + url,
        method: 'POST',
        data,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}