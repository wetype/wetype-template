import { App } from 'wetype-simple'
// import {  } from 'wetype-simple'

@App.decor({
    config: {
        pages: [
            'me',
            'clubManage',
            'index',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3cf',
            navigationBarTitleText: 'Project BAT',
        }
    }
})
class APP extends App {

    onLaunch() {
        console.log('onLaunch')
    }

    onShow() {

    }
}