const knex = require('./db');

const getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc');
}

const getUserById = (userId) => {
  console.log(userId)
  return knex('users')
    .where('id', userId).first()
    .then(result => {
      return result;
    })
}

module.exports = {
  getAllUsers,
  getUserById
}