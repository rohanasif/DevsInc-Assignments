import { Link } from "react-router-dom"


function Post({title, id}) {
  return (
    <li><Link to={`${id}`}>{title}</Link></li>
  )
}

export default Post