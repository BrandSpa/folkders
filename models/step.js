export default function(sequelize, Sequelize) {
  const Step = sequelize.define(
    "Step",
    {
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
					Step.belongsTo(models.User);
          Step.belongsTo(models.Todo);
        },
      },
      underscored: true
    }
  );

  return Step;
}
