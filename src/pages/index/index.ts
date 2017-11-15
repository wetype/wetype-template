import { PageDecor, global, PageConstr } from 'wetype-simple'
import { testFunc } from '../../libs/util'

@PageDecor({
    config: {
        disableScroll: true,
        usingComponents: {
            list: 'list'
        }
    }
})
class Index extends PageConstr{

    abc = false

    ddd: any = [1,2,3, 4,5]
    
    onLoad() {
        console.log(testFunc())
    }

    click() {
        // this.setData()
        this.setData({
            'ddd': this.ddd.concat(['d'])
        })
    }

}