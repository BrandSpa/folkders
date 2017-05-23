import bcrypt from 'bcrypt';

export default function(sequelize, Sequelize) {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },
    {
      classMethods: {
        associate(models) {

        },
				checkPassword() {
					bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
							if(res == true) return true;
							return false;
					});
				}
      },
      hooks: {
        beforeCreate: (user, options) => {
					return bcrypt.hash(user.password, 10).then(hash => user.password = hash );
        }
      }
    }
  );

  return User;
}
