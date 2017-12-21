class Observer {

    private events: any = {}

    on(eventName: string, func: Function) {
        this.events[eventName] = func
    }

    trigger(eventName: string, ...args: any[]) {
        this.events[eventName](...args)
    }

}

export const observer = new Observer