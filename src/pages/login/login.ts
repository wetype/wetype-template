
import { Page, wx, wt, types } from 'wetype-simple'
import { post } from '../../libs/util'
import { LoginRes } from '../../types/responseTypes'
import { handleReq } from '../../libs/handleReq'

@Page.decor({
    config: {
        navigationBarTitleText: '登录'
    }
})
class Login extends Page {

    onLoad(options: types.OnloadOptions) {
        if (options.query) {
            let { isBack } = options.query


        }
    }

    async getUserInfo(info: types.GetUserInfoEvent) {
        
        let { code } = await wt.login()
        
        let res: LoginRes = (await post('/api/auth/login', { code })).data

        let session = res.msg.session
        
        await wt.setStorage({ key: 'session', data: session})

        let saveRes = await post('/api/user/set-info', { ...info.detail.userInfo })
        
        wx.navigateBack()

    }

}
