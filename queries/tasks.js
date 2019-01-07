const knex = require('./db');

const getAllTasks = () => {
  return knex('tasks').orderBy('created_at', 'desc')
}

const getTaskById = (taskId) => {
  return knex('tasks')
    .where('id', taskId).first()
    .then(result => {
      return result;
    })
}

module.exports = {
  getAllTasks,
  getTaskById
}