import { Page, wx, wt, types } from 'wetype-simple'
import { SearchBarMixin } from '../../mixins/searchBar'
import { observer } from '../../libs/observer'

@Page.decor({
    config: {
        navigationBarTitleText: '选择球馆'
    },
    mixins: [SearchBarMixin]
})
class SelectArena extends Page {
    onLoad(options: types.OnloadOptions) {}

    onUnload() {
        observer.trigger('arenaSelected', { id: '123' })
    }
}
