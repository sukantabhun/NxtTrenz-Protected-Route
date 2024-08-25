import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onLogin = async () => {
    const {history} = props
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'rahul',
        password: 'rahul@2021',
      }),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    if (response.ok) {
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
      history.replace('/')
    }
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
