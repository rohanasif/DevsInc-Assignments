import { useContext } from "react"
import {UserContext} from '../App'
export default function ComponentF(){
    const username = useContext(UserContext)
    console.log(username, "user");
    return <div>Component F {username}</div>
}