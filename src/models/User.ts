import {Model} from './Model';
import {Attributes} from './Attributes';
import {ApiSync} from './ApiSync';
import {Eventing} from './Eventing';
import {Collection} from './Collection';
//We used interface here to reduce the complexity of writing
//the properties in a vertical manner. Also it creates a confusion
export interface UserProps{
    id?: number;
    name?:string;
    age?: number;
    //name?: string - Means , this is optional. A user can have a name
    //but not necessary
}

const rootUrl = 'https://localhost:3000/users';

export class User extends Model<UserProps>{
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps>{
        return new Collection<User, UserProps>
        (rootUrl,(json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge():void{
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}
