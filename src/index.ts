import {User} from './models/User';

const user = new User({name:'Brendon',age:5});
user.set({name: 'Daniela', age:25});

user.on('change',() => {
    console.log('Change #1');
});

/*user.get('name');
user.get('age');*/
//changes