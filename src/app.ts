import { App, wt } from 'wetype-simple'

@App.decor({
    config: {
        pages: [
            'index',
            'my-location',
            'search',
            'activityDetail',
            'activityCreate',
            'login',
            'me',
            'clubManage',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3ba686',
            navigationBarTitleText: 'Project BAT',
        }
    }
})
class APP extends App {

    async onLaunch() {
        

    }

    onShow() {

    }
}