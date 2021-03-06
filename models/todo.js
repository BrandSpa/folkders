export default function(sequelize, Sequelize) {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "It must have a title"
          }
        }
      },
			content: {
				type: Sequelize.TEXT,
         validate: {
          notEmpty: {
            msg: "It must have content"
          }
        }
			}
    },
    {
      classMethods: {
        associate(models) {
					Todo.belongsTo(models.Project);
					Todo.belongsTo(models.User);
					Todo.belongsTo(models.User, {as: 'Assign', foreignKey: 'assign_id' });
          Todo.hasMany(models.Step);
        },
      },
      underscored: true
    }
  );

  return Todo;
}
