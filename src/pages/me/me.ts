
import { PageDecor, global, PageConstr, wt, wx } from 'wetype-simple'

@PageDecor({
    config: {
        
    }
})
class me extends PageConstr {

    edit() {
        console.log('edit')
    }

}
