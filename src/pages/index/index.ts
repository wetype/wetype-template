import { Page, wt, wx, types } from 'wetype-simple'

@Page.decor({
    config: {
        enablePullDownRefresh: true,
        backgroundTextStyle: 'dark',
        disableScroll: true
    }
})
class Index extends Page {

    currentTabIndex = 1
    sliderLeft = 0
    sliderOffset = 0
    windowHeight = 0

    inputShowed = false
    inputVal = ''

    async onLoad() {
        let systemInfo = wx.getSystemInfoSync()
        this.sliderLeft = (systemInfo.windowWidth / 4 - 96) / 2
        this.sliderOffset = systemInfo.windowWidth / 4 * this.currentTabIndex
        this.windowHeight = systemInfo.windowHeight
    }

    async navbarTap(res: types.WxEvent) {
        let { index } = res.currentTarget.dataset
        if (index === '0') {

        } else {
            this.currentTabIndex = parseInt(index)
            this.sliderOffset = res.currentTarget.offsetLeft
        }
    }

    loadMore() {
        console.log('loadmore')
    }

    showInput() {
        this.inputShowed = true
    }

    hideInput() {
        this.inputShowed = false
        this.inputVal = ''
    }

    clearInput() {
        this.inputVal = ''
    }

    onInput(e: types.WxEvent) {
        this.inputVal = e.detail.value
    }

}