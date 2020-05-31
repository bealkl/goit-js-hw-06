//GOIT javascript homework 06 task 7
import users from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916