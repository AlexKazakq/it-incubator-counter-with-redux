import {stateReducer} from "./stateReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loadState, saveState} from "../../utils/localstoradge-utils";



// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    state: stateReducer
})


// непосредственно создаём store
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk),);


store.subscribe(() => {
    saveState(store.getState())
})

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
