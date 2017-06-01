export default function(sequelize, Sequelize) {
  const SubTodo = sequelize.define(
    "SubTodo",
    {
			content: {
				type: Sequelize.TEXT
			}
    },
    {
      classMethods: {
        associate(models) {
					SubTodo.belongsTo(models.Todo);
          SubTodo.belongsTo(models.User);
        },
      },
      underscored: true
    }
  );

  return SubTodo;
}
