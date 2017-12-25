
import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '我的俱乐部'
    }
})
class AdminClubManage extends Page {

    testObj: any = {
        a: {
            c: 1
        }
    }

    onLoad(options: types.OnloadOptions) {

    }

    click() {
        this.testObj = 2
        console.log(this.testObj)
    }
}
