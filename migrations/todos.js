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
      user_id: Sequelize.INTEGER,
      assign_id: Sequelize.INTEGER,
      project_id: Sequelize.INTEGER,
      todo_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      content: Sequelize.TEXT,
      is_completed: Sequelize.BOOLEAN
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('todos')
	}
};
