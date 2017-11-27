import { Page, wt } from 'wetype-simple'
import { testFunc, testFunc2 } from '../../libs/util'

@Page.decor({
    config: {
        disableScroll: true,
        usingComponents: {
            list: 'list'
        }
    }
})
class Index extends Page {

    abc = true

    ddd: any = [1,2,3,1114,5,9,8,9,0]

    list = []
    
    async onLoad() {
        let res = await wt.request({
            url: 'https://baidu.com',
            // method:
        })
        wt.getLocation({
            
        })
        console.log(res)
    }

    async click() {
        wt.uploadFile({
            url: '',
            filePath: '',
            name: ''
        })
        await this.setDataAsync({
            'ddd': this.ddd.concat(['d'])
        })
        console.log('done')
    }

}