export default function(sequelize, Sequelize) {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: Sequelize.STRING
      },
			content: {
				type: Sequelize.TEXT
			}
    },
    {
      classMethods: {
        associate(models) {
					Todo.belongsTo(models.Project);
					Todo.belongsTo(models.User);
          Todo.hasMany(Todo);
          Todo.belongsTo(Todo);
        },
      },
      underscored: true
    }
  );

  return Todo;
}
