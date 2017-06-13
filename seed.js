import models from './models/index';
import casual from 'casual';
import _ from 'lodash';
let userCreated = {};

function CreateCompany() {
  return models.Company.create({ name: casual.company_name });
}

function createUser(company) {
  return models.User.create({
      name: casual.first_name,
      email: casual.email,
      password: 'durden99',
      company_id: company.id
  })
}

function createClient(user) {
  return models.Client.create({ 
    name: casual.company_name, 
    abbreviation: casual.company_name.substring(0,3), 
    company_id: user.company_id 
  }).then(user => {
    userCreated = user;
    return user;
  })
}

function createProject(client) {
  return models.Project.create({ name: casual.catch_phrase, client_id: client.id })
}

function createTodo(project) {
  return models.Todo.create({ title: casual.title, content: casual.text, project_id: project.id, user_id: userCreated.id })
}

function createStep(todo) {
  return models.Step.create({ content: casual.text, todo_id: todo.id, user_id: userCreated.id });
}

_.times(10, () => { 
  CreateCompany()
  .then(createUser)
  .then(createClient)
  .then(createProject)
  .then(createTodo)
  .then(createStep);
});