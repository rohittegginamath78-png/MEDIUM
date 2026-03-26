import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"

const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <Auth type="signup" />
      <Quotes/>
    </div>
  )
}

export default Signup
