//We used interface here to reduce the complexity of writing
//the properties in a vertical manner. Also it creates a confusion
interface UserProps{
    name:string,
    //name?: string - Means , this is optional. A user can have a name
    //but not necessary
    age: number
}

export class User {
    constructor(private data: UserProps) {
    }

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
        //here comes the error
    }
}
