import { Component } from 'wetype-simple'

@Component.decor({
    properties: {
        data: {
            type: Array,
            value: []
        }
    }
})
export class WeuiList extends Component {
    attached() {
        console.log('weui-list-attached')
        console.log(this.data.data)
    }
}
