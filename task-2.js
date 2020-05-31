//GOIT javascript homework 06 task 2
import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(item => item.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]ony' ]