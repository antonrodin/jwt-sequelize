'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([

      queryInterface.bulkInsert('roles', [
        { role: "admin", createdAt: new Date(), updatedAt: new Date() },
        { role: "user", createdAt: new Date(), updatedAt: new Date() }
      ], {})

    ]);

  },

  down: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkDelete('roles', null, {}),
    ]);
  }
};
