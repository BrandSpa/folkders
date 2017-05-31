module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("companies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
       created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      name: Sequelize.STRING,
      logo: Sequelize.STRING,
      options: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('companies');
	}
};
