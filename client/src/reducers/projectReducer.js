const type = "PROJECT";

const projectReducer = (state = { selected: {}, todoId: null }, action) => {
	switch(action.type) {	
		case `SELECT_${type}`:
			state = {...state, selected: action.payload};
		break
		case `CLEAN_${type}_SELECTED`:
			state = {...state, selected: {}};
		break
		case `SELECT_${type}_TODO`:
			state = {...state, todoId: action.payload};
		break
	}
	return state;
}

export default projectReducer;