module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("subtodos", {
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
      todo_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      content: Sequelize.TEXT
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('subtodos')
	}
};
