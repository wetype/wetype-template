import { Page, wx, wt } from 'wetype-simple'
import { post, get } from '../../libs/util'

@Page.decor({
    config: {
        navigationBarTitleText: '活动详情'
    }
})
class ActivityDetail extends Page {
    info
    btnText = '获取验证码'
    date = '2017-12-12'
    time = '08:00'

    listData = [
        {
            title: 'Title',
            after: 'After',
            imgUrl: 'https://avatars2.githubusercontent.com/u/2544327?v=4',
            url: '/index'
        }
    ]

    inputData = [
        {
            title: 'ABC',
            inputMethod: 'bindinput'
        }
    ]

    async onLoad() {
        console.log('onload detail')
        // let location = await wt.getLocation({})
        // let res = await get('/api/activity/index', {
        //     activity_id: '5',
        //     lat: location.latitude,
        //     lng: location.longitude
        // })
        // console.log(res)
        // this.setData({ info: res.data.msg })
    }

    onShow() {
        console.log('onshow detail')
    }

    bindinput() {
        console.log(232)
    }

    getCode() {
        console.log('getCode')
    }

    async signup() {
        let res = await post('/api/activity/join', { activity_id: '5' })
        console.log(res)
    }

    switchChange(res) {
        console.log(res)
    }
}
