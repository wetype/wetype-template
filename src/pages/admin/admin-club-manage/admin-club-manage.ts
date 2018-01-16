import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '我的俱乐部'
    }
})
class Admin_AdminClubManage extends Page {
    onLoad(options: types.OnloadOptions) {}

    hah = 1

    get testObj() {
        return this.hah + 1
    }

    click() {
        // this.hah = this.hah + 1
        // this.applyData()
        // console.log(this.testObj)
    }
}
