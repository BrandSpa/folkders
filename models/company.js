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
          Company.hasMany(models.User);
        },
      },
      underscored: true
    }
  );

  return Company;
}
