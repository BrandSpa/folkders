export default function(sequelize, Sequelize) {
  const Company = sequelize.define(
    "Company",
    {
      name: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      }
    },
    {
      classMethods: {
        associate(models) {

        },
      }
    }
  );

  return Company;
}
