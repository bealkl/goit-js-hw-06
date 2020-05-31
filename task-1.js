//GOIT javascript homework 06 task 1
import users from './users.js';

const getUserNames = users => {
  return users.map(item => item.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]