import { App, wt } from 'wetype-simple'

@App.decor({
    config: {
        pages: [
            'activityDetail',
            'activityCreate',
            'login',
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

    async onLaunch() {
        

    }

    onShow() {

    }
}