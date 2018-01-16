import { types } from 'wetype-simple'

export interface Response {
    /**
     * 返回数据
     */
    msg: any

    /**
     * 提示文案
     */
    alertMsg?: string

    /**
     *
     */
    type: 'succ' | 'err'
}

export interface LoginRes {
    msg: {
        new: 0 | 1
        session: string
    }
    type: string
}
