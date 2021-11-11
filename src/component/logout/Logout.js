import {useHistory} from "react-router-dom";

const Logout = () => {
    let history = useHistory()
    localStorage.clear()
}
export default Logout