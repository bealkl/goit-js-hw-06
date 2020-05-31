//GOIT javascript homework 06 task 8
import users from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return (users.filter(item => item.friends.find(item2 => item2 === friendName))).map(item3 => item3.name);

};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]