import { useState, useRef } from 'react'
import classes from './auth-form.module.css'

function AuthForm() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthHandler() {
    setIsLogin((prevstate) => !prevstate)
  }

  async function submitHandler(event) {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Signg Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your email</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
        </div>
      </form>
    </section>
  )
}
