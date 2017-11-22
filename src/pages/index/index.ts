import { PageDecor, global, PageConstr, wx } from 'wetype-simple'
import { testFunc, testFunc2 } from '../../libs/util'
import { uploadFile } from '../../../../wetype-simple/dist/typings/typings';

@PageDecor({
    config: {
        disableScroll: true,
        usingComponents: {
            list: 'list'
        }
    }
})
class Index extends PageConstr {

    abc = true

    ddd: any = [1,2,3,1114,5,9,8,9,0]

    list = []
    
    async onLoad() {
        let res = await wx.request({
            url: 'https://baidu.com',
            // method:
        })
        console.log(res)
    }

    async click() {
        wx.uploadFile({
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