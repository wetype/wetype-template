import { Page, wt, wx, types } from 'wetype-simple'

export class SearchBarMixin extends Page {

    inputShowed = false
    inputVal = ''

    onLoad() {}

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