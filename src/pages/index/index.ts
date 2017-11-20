import { PageDecor, global, PageConstr } from 'wetype-simple'
import { testFunc, testFunc2 } from '../../libs/util'

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
    
    onLoad() {
        console.log(testFunc2)
    }

    async click() {
        await this.setDataAsync({
            'ddd': this.ddd.concat(['d'])
        })
        console.log('done')
    }

}