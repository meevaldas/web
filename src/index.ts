import {User} from './models/User';

const user = new User({id:1});

user.set({name: 'Mark', age:29});
user.save();