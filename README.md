# folkders

## Structure
- Companies
	- users: belongs to companies
		- clients: belongs to companies
			- projects: belongs to clients
				- todos: belongs to projects and user
					- attachments: belongs to todo 
					- comments: belongs to todos and user

## libs to look up
- use [natural](https://www.npmjs.com/package/natural) to automatically tag projects
- use [i18n-node](https://github.com/mashpie/i18n-node) to do multilang stuff
- learn graphql to do the api and [dataloader](https://www.npmjs.com/package/dataloader)
