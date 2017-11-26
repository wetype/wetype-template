import { AppDecor, global } from 'wetype-simple'
// import {  } from 'wetype-simple'

@AppDecor({
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
class APP {

    onLaunch() {
        console.log('onLaunch')
    }

    onShow() {

    }

}