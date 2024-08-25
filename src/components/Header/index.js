import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <Link to="/about">
      <h1>About</h1>
    </Link>
  </div>
)

export default withRouter(Header)
