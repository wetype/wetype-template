import { Page, wt, wx, types } from 'wetype-simple'
import { SearchBarMixin } from '../../mixins/searchBar'
import { observer } from '../../libs/observer'

@Page.decor({
    config: {
        enablePullDownRefresh: true,
        backgroundTextStyle: 'dark',
        disableScroll: true,
        navigationBarTitleText: '活动列表'
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

        observer.trigger('')
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

    async floatBtnTap() {
        try {
            let { tapIndex } = await wt.showActionSheet({
                itemList: ['创建活动', '按时间排序']
            })
            if (tapIndex === 0) {
                wx.navigateTo({ url: 'activityCreate' })
            } else if (tapIndex === 1) {
    
            } else if (tapIndex === 2) {
    
            }
        } catch (e) {
            
        }
    }

}