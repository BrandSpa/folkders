import bcrypt from 'bcrypt';

export default function(sequelize, Sequelize) {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING
      }
    },
    {
      classMethods: {
        associate(models) {
          User.belongsTo(models.Company);
          User.hasMany(models.Todo);
        },
				checkPassword(user, plainPass) {
					return bcrypt.compare(plainPass, user.password).then(function(res) {
							if(res == true) return true;
							return false;
					});
				}
      },
      hooks: {
        beforeCreate: (user, options) => {
					return bcrypt.hash(user.password, 10).then(hash => user.password = hash );
        }
      },
      underscored: true
    }
  );

  return User;
}
