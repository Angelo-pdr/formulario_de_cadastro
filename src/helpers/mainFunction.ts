import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export const mainFunction = ({taskPassword, taskEmail}) => {
    
    const navigate = useNavigate()
    const [userList, setUserList] = useState (JSON.parse(localStorage.getItem('user') || '[]'))

    for(let index in userList){
        if(taskPassword == userList[index].password && taskEmail == userList[index].email){
            return navigate("/dashboard")
        }
    }
    
}