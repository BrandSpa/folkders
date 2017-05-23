import models from '../models';

export const users = {
	get(req, res) {
		models.User.findAll({}).then(users => {
				return res.json(users);
		})
	},

	store(req, res) {
		const data = req.body;
		models.User.create(data).then(user => res.json(user));
	}
}


