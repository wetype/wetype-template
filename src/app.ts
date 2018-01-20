import { App, wt } from 'wetype-simple'

@App.decor({
    config: {
        mainPage: 'pages/index/index',
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3ba686',
            navigationBarTitleText: 'Project Wetype'
        }
    }
})
class APP extends App {
    async onLaunch() {}

    onShow() {}
}
