import axios, {AxiosResponse} from 'axios';

//We used interface here to reduce the complexity of writing
//the properties in a vertical manner. Also it creates a confusion
interface UserProps{
    id?: number,
    name?:string,
    //name?: string - Means , this is optional. A user can have a name
    //but not necessary
    age?: number
}

type Callback = () => void;

export class User {
    events: {[key:string]: Callback[]} = {};

    constructor(private data: UserProps) {
    }

    get(propName: keyof UserProps): number | string | undefined{
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
        //here comes the error
    }

    fetch(): void{
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void{
        const id = this.get('id');
        if(this.get('id')){
            axios.put(`http://localhost:3000/users/${id})`, this.data)
        }
        else{
            axios.put(`http://localhost:3000/users)`, this.data)
        }
    }
}
