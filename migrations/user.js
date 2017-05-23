module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("users", {
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
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      googleId: Sequelize.STRING,
      isEmailVerified: Sequelize.BOOLEAN
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('users')
	}
};
