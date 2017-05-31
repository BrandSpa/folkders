module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("todos", {
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
      project_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      content: Sequelize.TEXT
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('todos')
	}
};
