'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('user_role', [
        { user_id: 1, role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, role_id: 2, createdAt: new Date(), updatedAt: new Date() }
      ], {})
    ]);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_role', null, {});
  }
};
