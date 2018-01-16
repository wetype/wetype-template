import { App, wt } from 'wetype-simple'

@App.decor({
    config: {
        mainPage: 'pages/index/index',
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3ba686',
            navigationBarTitleText: 'Project BAT'
        },
        tabBar: {
            color: '#666',
            selectedColor: '#3ba686',
            backgroundColor: '#fff',
            position: 'bottom',
            list: [
                {
                    pagePath: 'pages/index/index',
                    text: '活动',
                    iconPath: './img/tabbar-1.png',
                    selectedIconPath: './img/tabbar-1-selected.png'
                },
                // {
                //     pagePath: 'discovery',
                //     text: '发现',
                //     iconPath: './img/tabbar-2.png',
                //     selectedIconPath: './img/tabbar-2-selected.png'
                // },
                {
                    pagePath: 'pages/me/me',
                    text: '我',
                    iconPath: './img/tabbar-3.png',
                    selectedIconPath: './img/tabbar-3-selected.png'
                }
            ]
        }
    }
})
class APP extends App {
    async onLaunch() {}

    onShow() {}
}
