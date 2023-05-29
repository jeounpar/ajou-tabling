import { createContext, useState } from 'react';
export const LoginContext = createContext({
  login: false,
  auth: 'User',
});

function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [auth, setAuth] = useState('User');
  function loginFunction() {
    setLogin(true);
  }
  function logoutFunction() {
    setLogin(false);
  }
  function loginUser() {
    setAuth('User');
  }
  function loginAdmin() {
    setAuth('Admin');
  }

  const value = {
    login: login,
    auth: auth,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    loginUser: loginUser,
    loginAdmin: loginAdmin,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

export default LoginContextProvider;
