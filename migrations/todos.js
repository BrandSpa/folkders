module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("todos", {
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
      project_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      content: Sequelize.TEXT
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('todos')
	}
};
