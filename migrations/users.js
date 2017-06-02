module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("users", {
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
      company_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        }
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      email_verified: {type: Sequelize.BOOLEAN, default: false }
    });
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('users')
	}
};
