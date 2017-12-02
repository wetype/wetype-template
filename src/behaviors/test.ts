import { Behavior } from 'wetype-simple'

@Behavior.decor()
export class TestBehavior extends Behavior {

    grr = 123

    attached() {
        console.log('test attached')
    }

}