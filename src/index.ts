import {UserList} from './views/UserList';
import {Collection} from './models/Collection';
import {User, UserProps} from './models/User';

const users = new Collection('http://localhost3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    });

users.on('change', () => {
    const root = document.getElementById('root');

    if(root){
        new UserList(root, users).render();
    }
});

users.fetch();
