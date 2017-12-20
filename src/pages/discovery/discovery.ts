
import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: '发现'
    }
})
class Discovery extends Page {

    currentTabIndex = 0
    sliderLeft = 0
    sliderOffset = 0
    windowHeight = 0

    onLoad(options: types.OnloadOptions) {
        let tabLength = 2
        let systemInfo = wx.getSystemInfoSync()
        this.sliderLeft = (systemInfo.windowWidth / tabLength - 96) / 2
        this.sliderOffset = systemInfo.windowWidth / tabLength * this.currentTabIndex
        this.windowHeight = systemInfo.windowHeight
    }

    navbarTap(e: types.WxEvent) {
        let { index } = e.currentTarget.dataset
        this.currentTabIndex = parseInt(index)
        this.sliderOffset = e.currentTarget.offsetLeft
    }


}
