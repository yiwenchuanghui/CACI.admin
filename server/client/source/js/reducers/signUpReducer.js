import AppTypes from '../types/appTypes';

const initialState = {
  _isLogin: false,
  errorMessage: '',
  _isSignUp: false,
  usernameError: '',
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.SIGN_UP_REQUEST:
      state = {
        ...state,
      };
      break;
    case AppTypes.SIGN_UP_FAIL:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case AppTypes.SIGN_UP:
      state = {
        ...state,
        _isLogin: action.payload._isLogin,
        data: action.payload.data,
      };
      break;
  }
  return state;
}
