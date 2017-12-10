
import { Page, wx, wt } from 'wetype-simple'
import { post, get } from '../../libs/util'

@Page.decor({
    config: {
        navigationBarTitleText: '活动详情',
        usingComponents: {
            'weui-list': 'weui-list'
        }
    },
})
class ActivityDetail extends Page {

    info

    listData = [
        {
            title: 'Title',
            after: 'After',
            imgUrl: 'https://avatars2.githubusercontent.com/u/2544327?v=4',
            url: '/index'
        }
    ]

    async onLoad() {
        let location = await wt.getLocation({})
        let res = await get('/api/activity/index', { 
            activity_id: '5', 
            lat: location.latitude,
            lng: location.longitude
        })
        console.log(res)
        this.setData({ info: res.data.msg })
    }

    async signup() {
        let res = await post('/api/activity/join', { activity_id: '5' })
        console.log(res)
    }


}
