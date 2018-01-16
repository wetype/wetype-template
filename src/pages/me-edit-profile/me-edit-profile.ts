import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '编辑我的资料'
    }
})
class MeEditProfile extends Page {
    @Page.input('inputNickName') nickName = ''

    @Page.input('inputSex') sex = '0'

    @Page.input('inputBirthday') birthday = '2017-01-01'

    @Page.input('inputPhone') phone = ''

    @Page.input('inputWechatId') wechatId = ''

    sexRange = ['男', '女']

    onLoad(options: types.OnloadOptions) {}

    // inputSex(res) {
    //     console.log(res)
    // }
}
