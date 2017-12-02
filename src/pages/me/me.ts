
import { wt, wx, Page } from 'wetype-simple'

@Page.decor({
    config: {
        usingComponents: {
            list: 'list'
        }
    }
})
class me extends Page {

    bb = 2

    onLoad() {
        this.setDataAsync({
            b: 3
        })
        
    }

    edit() {
        console.log('edit')
    }

}
