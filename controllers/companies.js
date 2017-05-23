import models from '../models';

export const companies = {
	get(req, res) {
		models.Company.findAll({}).then(users => {
				return res.json(users);
		})
	},

	store(req, res) {
		const data = req.body;
		models.Company.create(data).then(user => res.json(user));
	}
}


