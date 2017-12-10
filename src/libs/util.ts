import { wt, wx } from 'wetype-simple'
import { config } from './config'
import param from 'jquery-param'

export const checkLogin = async () => {
    let session = wx.getStorageSync('session')
    if (session) {
        return session
    }
    wx.navigateTo({ url: 'login' })
}

export const get = async (url: string, data?: any) => {
    let session = await wt.getStorage({ key: 'session' })

    return wt.request({
        url: config.hostName + url,
        method: 'GET',
        data,
        header: {
            session: session.data
        }
    })
}

export const post = async (url: string, data: any) => {

    let session = await wt.getStorage({ key: 'session' })
    return wt.request({
        url: config.hostName + url,
        method: 'POST',
        data: param(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            session: session.data
        }
    })
}