import { Component } from 'wetype-simple'
import { TestBehavior } from '../../behaviors/test'

console.log(TestBehavior)
@Component.decor({
    config: {
        
    },
    properties: {

    },
    behaviors: [TestBehavior]
})
export class List extends Component {

    ggg = 321

    attached() {
        console.log('hahah')
    }

}