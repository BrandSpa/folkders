module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("clients", {
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
      company_id: Sequelize.INTEGER,
      name: Sequelize.STRING,
			abbreviation: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('clients');
	}
};
