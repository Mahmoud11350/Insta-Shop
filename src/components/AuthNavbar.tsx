import { Link } from "react-router-dom"

const AuthNavbar = () => {
  return (
    <div className="wrapper flex items-center justify-center md:justify-end">
        <div className="flex gap-4">
            <Link to={'/login'} className="text-green-600 font-bold">Sign In</Link>
            <Link to={'/register'} className="text-green-600 font-bold">Register</Link>
        </div>
    </div>
  )
}

export default AuthNavbar