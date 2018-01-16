class Observer {
    private events: any = {}

    on(eventName: string, func: Function) {
        this.events[eventName] = func
    }

    trigger(eventName: string, ...args: any[]) {
        let func = this.events[eventName]
        if (!func) throw Error(`no event ${eventName}`)
        this.events[eventName](...args)
    }
}

export const observer = new Observer()
