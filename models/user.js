import Sequelize from 'sequelize';
const sequelize = Sequelize;

export default function(sequelize, Sequelize) {
	const User = sequelize.define('User', {
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
					console.log(models);
				}
			}
		});

	return User;
}

