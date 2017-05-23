module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("companies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      name: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('companies');
	}
};
