
import { Page, wx } from 'wetype-simple'

@Page.decor({
    config: {

    }
})
class ActivityCreate extends Page {
    
    date = '2017-12-02'
    timeStart = '10:00'
    timeEnd = '12:00'

    onLoad() {

    }

    bindDateChange(res) {
        console.log(res)
    }

    bindTimeChange() {

    }

    bindTimeEndChange() {

    }

}
