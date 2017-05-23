# folkders

## Structure
- Companies
	- users: belongs to companies
		- clients: belongs to companies
			- projects: belongs to clients
				- todos: belongs to projects and user
					- attachments: belongs to todo 
					- comments: belongs to todos and user

## Architecture
- Backend
	- MVC
- Frontend
	- Flux

## libs to look up
- use [natural](https://www.npmjs.com/package/natural) to automatically tag projects
- use [i18n-node](https://github.com/mashpie/i18n-node) to do multilang stuff
- use [progressive-image](https://github.com/craigbuckler/progressive-image.js) to load images
