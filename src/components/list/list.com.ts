import { Component } from 'wetype-simple'
import { TestBehavior } from '../../behaviors/test'

@Component.decor({
    config: {
        
    },
    properties: {

    },
    behaviors: [ TestBehavior ]
})
export class List extends Component {


}