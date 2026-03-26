import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"

const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <Auth type="signin" />
      <Quotes/>
    </div>
  )
}

export default Signin
