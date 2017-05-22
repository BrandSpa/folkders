import models from '../models/index';

export default {
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
