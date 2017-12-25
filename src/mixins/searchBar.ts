import { Page, wt, wx, types } from 'wetype-simple'

export class SearchBarMixin extends Page {

    inputShowed = false
    inputVal = ''

    readonly currentTabIndex

    onLoad() {
        console.log(this.currentTabIndex)
    }

    showInput() {
        this.inputShowed = true
        this.emit('testEvent', 123)
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