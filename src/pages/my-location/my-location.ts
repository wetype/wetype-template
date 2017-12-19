
import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '我的位置'
    }
})
class MyLocation extends Page {

    city = '成都'

    onLoad(options: types.OnloadOptions) {
        
    }

}
