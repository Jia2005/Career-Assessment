import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === 'Codey@gmail.com' && password === 'Codey@code') {
      const user = {
        name: 'Codey',
        email: 'Codey@gmail.com',
        interests: ['Mathematics', 'Science', 'Coding']
      };
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return { success: true, user };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  };

  const register = (name, email, password) => {
    const user = { name, email, interests: [] };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return { success: true, user };
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const updateUser = (userData) => {
    const updatedUser = { ...currentUser, ...userData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };