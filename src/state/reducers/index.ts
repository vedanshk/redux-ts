
import { combineReducers } from "redux";

import repositoriesReducer from '../reducers/repositoriesReducer';

const rootReducers = combineReducers({

    repositories: repositoriesReducer 

});



export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;