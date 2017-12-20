import { Page, wt, wx, types } from 'wetype-simple'
import { SearchBarMixin } from '../../mixins/searchBar'

@Page.decor({
    config: {
        enablePullDownRefresh: true,
        backgroundTextStyle: 'dark',
        disableScroll: true,
    },
    mixins: [SearchBarMixin]
})
class Index extends Page {

    currentTabIndex = 1
    sliderLeft = 0
    sliderOffset = 0
    windowHeight = 0

    async onLoad() {
        let systemInfo = wx.getSystemInfoSync()
        this.sliderLeft = (systemInfo.windowWidth / 4 - 96) / 2
        this.sliderOffset = systemInfo.windowWidth / 4 * this.currentTabIndex
        this.windowHeight = systemInfo.windowHeight
    }

    async navbarTap(res: types.WxEvent) {
        let { index } = res.currentTarget.dataset
        if (index === '0') {
            wx.navigateTo({ url: 'my-location' })
        } else {
            this.currentTabIndex = parseInt(index)
            this.sliderOffset = res.currentTarget.offsetLeft
        }
    }

    loadMore() {
        console.log('loadmore')
    }

}