import { combineReducers } from 'redux';
import client from './clientReducer';
import project from './projectReducer';
import todo from './todoReducer';



export default function(apolloClient) { 

return combineReducers({
	client,
	project,
	todo,
	apollo: apolloClient.reducer()
});


};
