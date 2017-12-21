import { Page, wt, wx, types } from 'wetype-simple'
import { observer } from '../libs/observer'

export class SearchBarMixin extends Page {

    inputShowed = false
    inputVal = ''

    constructor() {
        super()
        observer.on('data', (...arg) => {
            console.log(arg)
        })
    }

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