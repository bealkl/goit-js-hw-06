//GOIT javascript homework 06 task 3
import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return (users.filter(item => item.gender === gender)).map(item2 => item2.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]]