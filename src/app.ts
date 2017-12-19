import { App, wt } from 'wetype-simple'

@App.decor({
    config: {
        pages: [
            'index',
            'search',
            'activityDetail',
            'activityCreate',
            'login',
            'me',
            'clubManage',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3cf',
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