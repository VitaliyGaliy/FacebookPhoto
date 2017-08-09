import { NOTLOG_FB,
         INIT_FB ,
         SET_TOKEN,
         LOG_FB } from '../constants/FB'

const initialState = {
  isAuthenticated: false,
  initFB: false
}

export default function facebook(state = initialState, action) {

  switch (action.type) {
  case INIT_FB:
    return {...state, initFB: true };

  case LOG_FB:
    return {...state, isAuthenticated: true };

  case NOTLOG_FB:
    return {...state, isAuthenticated: false};

  case SET_TOKEN:
    return {...state, token: action.payload };

  default:
    return state
  }
}
