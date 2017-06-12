const type = "TODO";

const todoReducer = (state = {}, action) => {
	switch(action.type) {	
		case `SELECT_${type}`:
			state = {...state, selected: action.payload};
		break;
		case `CLEAN_${type}_SELECTED`:
			state = {...state, selected: {}};
		break;		
	}

	return state;
}

export default todoReducer;

