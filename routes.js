import users from './controllers/users';

export default function Routes(app) {
	app.get('/api/v1/users', users.get);
	app.post('/api/v1/users', users.store);
}
