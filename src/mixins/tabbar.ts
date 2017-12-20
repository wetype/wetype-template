import { Page, wx, wt, types } from 'wetype-simple'

export class TabbarMixin extends Page {

    onLoad() {}

    currentTabIndex = 0
    sliderLeft = 0
    sliderOffset = 0
    windowHeight = 0

    systemInfo = wx.getSystemInfoSync()

    

}