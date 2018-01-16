import { Page, wx, wt, types } from 'wetype-simple'
import { SearchBarMixin } from '../../mixins/searchBar'

@Page.decor({
    config: {
        navigationBarTitleText: '我的位置'
    },
    mixins: [SearchBarMixin]
})
class MyLocation extends Page {
    city = '成都'
    inputShowed = true

    onLoad(options: types.OnloadOptions) {}
}
