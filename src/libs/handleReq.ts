import { types, wt, wx } from 'wetype-simple'
import { Response } from '../types/responseTypes'

interface Config {

    key: string

    /**
     * 请求前执行
     */
    before?(): void

    /**
     * 请求后执行
     */
    after?(...args): void

}

class HandleReq {
    
    /**
     * idle | pending
     */
    state = 'idle'

    before?: () => void

    after?: (...args) => void

    constructor(config: Config) {
        this.before = config.before
        this.after = config.before
    }

    async handle<T>(promise: Promise<types.RequestRes>) {

        // 如果请求还在进行中，则抛错
        if (this.isPending()) {
            throw Error('proimise is pending')
        }

        try {
            // 请求前钩子
            this.before
                ? this.before()
                : wt.showLoading({ title: '加载中...' })
            
            // 发送请求
            let data: T = (await promise).data
            
            // 请求完成，改变请求状态
            this.changeState('idle')
            
            // 请求后钩子
            this.after
                ? this.after(data)
                : wx.hideLoading()

            // 弹出错误信息
            // data.alertMsg && wt.alert(data.alertMsg)

            return data
        }
        // 处理通信错误
        catch (e) {
            console.log(e)
            wt.alert('系统错误，请稍后再试')
            throw Error(e)
        }
    }

    private isPending() {
        return this.state === 'pending'
    }

    private isIdle() {
        return this.state === 'idle'
    }

    private changeState(state: string) {
        this.state = state
    }

}

let handlers: { [k: string]: HandleReq } = {}

export function handleReq(config: Config) {
    let key = config.key
    if (!handlers[key]) {
        handlers[key] = new HandleReq(config)
    }
    return handlers[key]
}