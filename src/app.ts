import { AppDecor, global } from 'wetype-simple'
// import {  } from 'wetype-simple'

@AppDecor({
    config: {
        pages: [
            'index',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#999',
            navigationBarTitleText: 'Project BAT',
        }
    }
})
class APP {

    onLaunch() {
        console.log('onLaunch', this)
    }

    onShow() {

    }

}