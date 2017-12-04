import { App } from 'wetype-simple'

@App.decor({
    config: {
        pages: [
            'login',
            'activityCreate',
            'activityDetail',
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
    }

    onShow() {

    }
}