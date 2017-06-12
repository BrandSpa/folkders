const type = "CLIENT";

const clientReducer = (state = { selected: {} }, action) => {
	switch(action.type) {	
		case `SELECT_${type}`: {
			state = {...state, selected: action.payload};
			break;
		}
	}

	return state;
}

export default clientReducer;