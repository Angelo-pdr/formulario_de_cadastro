import {useNavigate} from 'react-router-dom'

const userList = JSON.parse(localStorage.getItem('user') || '[]')
const navigate = useNavigate

export const validUser = (taskPassword, taskEmail) =>{

        for(let index in userList){
            if(taskPassword == userList[index].password && taskEmail == userList[index].email){
                navigate("/dashboard")
            }
        }
    }