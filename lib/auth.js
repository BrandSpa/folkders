export default function checkAuth(req, res, next) {
	var token = req.session['access-token'] || req.headers['access-token'];

	if(token) {
		return next();
	}
	
	return res.status(401).json({'message': 'Not authorized'});
}
