import { Component } from 'wetype-simple'

@Component.decor({
    properties: {
        data: {
            type: Array,
            value: [
                {
                    title: 'ABC'
                }
            ]
        }
    }
})
export class WeuiInput extends Component {


}