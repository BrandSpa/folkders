module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("projects", {
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
      company_id: Sequelize.INTEGER,
      name: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('projects');
	}
};
