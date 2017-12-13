
import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '',
        usingComponents: {
            'weui-search-bar': 'search-bar'
        }
    }
})
class Search extends Page {

    inputVal = ''
    inputShowed = false


    onLoad(options: types.OnloadOptions) {

    }

    clearInput() {
        this.setData({ inputVal: '' })
    }

    onInput(res: types.WxEvent) {
        this.setData({ inputVal: res.detail.value })
    }

    showInput() {
        this.setData({ inputShowed: true })
    }

    hideInput() {
        this.setData({ inputVal: '', inputShowed: false })
    }

}
