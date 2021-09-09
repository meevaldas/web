//We used interface here to reduce the complexity of writing
//the properties in a vertical manner. Also it creates a confusion
interface UserProps{
    name:string,
    //name?: string - Means , this is optional. A user can have a name
    //but not necessary
    age: number
}

type Callback = () => void;

export class User {
    events: {[key:string]: Callback} = {}

    constructor(private data: UserProps) {
    }

    get(propName: keyof UserProps): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
        //here comes the error
    }

    on(eventName:string, callback: Callback):void{
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void{
        const handlers = this.events[eventName];

        if(!handlers || handlers.length === 0){
            return;
        }

        handlers.foreach(callback => {
            callback();
        });
    }
}
