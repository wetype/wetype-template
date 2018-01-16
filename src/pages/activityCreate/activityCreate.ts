import { Page, wx, wt, types } from 'wetype-simple'
import { get, post } from '../../libs/util'
import param from 'jquery-param'
import { observer } from '../../libs/observer'

@Page.decor({
    config: {
        navigationBarTitleText: '创建活动'
    }
})
class ActivityCreate extends Page {
    date = '2017-12-02'
    timeStart = '10:00'
    timeEnd = '12:00'
    arenaId = '1552'
    limit = '12'
    phone = '13350804217'
    charge = '35'
    joinDeadline = '2'
    cancelDeadline = '2'
    intro = '哈哈哈哈'

    async onLoad() {
        let location = await wt.getLocation({})
        observer.on('arenaSelected', obj => {
            console.log(obj)
        })
        // let res = await get('/api/common/get-arenas', {
        //     lat: location.latitude,
        //     lng: location.longitude
        // })
    }

    async submit() {
        let {
            date,
            timeStart,
            timeEnd,
            arenaId,
            limit,
            phone,
            charge,
            joinDeadline,
            cancelDeadline,
            intro
        } = this.data
        let res = await post('/api/activity/create-temp', {
            arena_id: arenaId,
            person_limit: limit,
            contact: phone,
            begin_time: date + ' ' + timeStart,
            deadline: date + ' ' + timeEnd,
            woman_fee: charge,
            man_fee: charge,
            vip_discount: 0,
            cancel_deadline: cancelDeadline * 3600,
            join_deadline: joinDeadline * 3600,
            descript: intro,
            service: ['羽毛球', '场地']
        })
    }

    bindDateChange(res: types.WxEvent) {
        this.setData({ date: res.detail.value })
    }

    bindTimeChange(res) {
        this.setData({ timeStart: res.detail.value })
    }

    bindTimeEndChange(res) {
        this.setData({ timeEnd: res.detail.value })
    }

    chargeInput(res) {
        this.setData({ charge: res.detail.value })
    }

    joinDeadlineInput(res) {
        this.setData({ joinDeadline: res.detail.value })
    }

    cancelDeadlineInput(res) {
        this.setData({ cancelDeadline: res.detail.value })
    }

    phoneInput(res) {
        this.setData({ phone: res.detail.value })
    }

    limitInput(res) {
        this.setData({ limit: res.detail.value })
    }

    arenaInput(res) {
        this.setData({ arenaId: res.detail.value })
    }

    introInput(res) {
        this.setData({ intro: res.detail.value })
    }
}
