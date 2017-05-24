const TYPE = 'USERS';

const initialState = {
	items: []
};

function usersReducer(state = initialState, action) {
	switch(action.type) {
		case `ADD_${TYPE}_TEST`:
			return  {...state, items: action.payload};
		default: 
			return state;
	}
	
}

export default usersReducer;