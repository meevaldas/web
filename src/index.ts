import {User} from './models/User';

const user = new User({name:'Brendon',age:5});
user.set({name: 'Daniela', age:25});

user.get('name');
user.get('age');