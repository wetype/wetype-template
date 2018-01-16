import { Page, wt, wx, types } from 'wetype-simple'

export class SearchBarMixin extends Page {
    inputShowed = false

    @Page.input('onInput') inputVal = ''

    readonly currentTabIndex

    onLoad() {}

    showInput() {
        this.inputShowed = true
        // this.emit('testEvent', 123)
    }

    hideInput() {
        this.inputShowed = false
        this.inputVal = ''
    }

    clearInput() {
        this.inputVal = ''
    }
}
