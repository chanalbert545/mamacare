import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const ADMIN_EMAIL = 'admin@mamacare.org'
const ADMIN_PASSWORD = 'mamacare26'

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(
    typeof window !== 'undefined' &&
      window.localStorage &&
      window.localStorage.getItem('mamacare-is-admin') === 'true'
  )

  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      try {
        window.localStorage.setItem('mamacare-is-admin', 'true')
      } catch {
        // ignore storage errors
      }
      return { success: true }
    }

    return {
      success: false,
      error: 'Invalid admin credentials',
    }
  }

  const logout = () => {
    setIsAdmin(false)
    try {
      window.localStorage.removeItem('mamacare-is-admin')
    } catch {
      // ignore storage errors
    }
  }

  // Registration is disabled – this is a single-admin site
  const register = () => ({
    success: false,
    error: 'Registration is currently disabled for this site.',
  })

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
