import PropTypes from 'prop-types';
import { useEffect, useReducer, useCallback, useMemo } from 'react';
// utils
import axios, { endpoints } from 'src/utils/axios';
//
import { AuthContext } from './auth-context';
import { isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get(endpoints.auth.me);

        const { user } = response.data;

        dispatch({
          type: 'INITIAL',
          payload: {
            user: {
              ...user,
              accessToken,
            },
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const data = {
      email,
      password,
    };

    console.log(data);
    const response = await axios.post("https://invoicecollectionsystemapi.azurewebsites.net/api/Account/authenticate", data);
    // {
    //   "id": "bb2bfe5d-b0a8-491d-b7c3-1f359ca303c4",
    //   "userName": "omarjkf",
    //   "email": "user@example.com",
    //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbWFyamtmIiwianRpIjoiNmUwZTMzODYtZjZhMS00ODZlLTljZmItYjFiZmRlMGNhYzE2IiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwidWlkIjoiYmIyYmZlNWQtYjBhOC00OTFkLWI3YzMtMWYzNTljYTMwM2M0Iiwicm9sZXMiOiJBZG1pbiIsImV4cCI6MTY5MjA4MzQwOCwiaXNzIjoiSU9DSWRlbnRpdHkiLCJhdWQiOiJJT0NJZGVudGl0eVVzZXIifQ.z1PUgRMQK9BMgedHtOucLyEGoEZpwV8PZ3C-I-sjorE"
    // }
    
    // const { accessToken, user } = response.data;

    // setSession(accessToken);

    // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     user,
    //   },
    // });

      const { token, id, userName } = response.data;
      sessionStorage.setItem(STORAGE_KEY, token);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("email", email);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: response.data.userName,
        },
      });


  }, []);

  // REGISTER
  const register = useCallback(async (email, password, firstName, lastName) => {
    const data = {
      email,
      password,
      firstName,
      lastName,
    };

    const response = await axios.post(endpoints.auth.register, data);

    const { accessToken, user } = response.data;

    sessionStorage.setItem(STORAGE_KEY, accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user: {
          ...user,
          accessToken,
        },
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      register,
      logout,
    }),
    [login, logout, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
