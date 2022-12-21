import "./Single.css"
import { Sidebar, SinglePost } from "../../components/index/index.comp"

const Single = () => {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default Single