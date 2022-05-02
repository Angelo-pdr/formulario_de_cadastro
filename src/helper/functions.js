import {useState} from 'react'

const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")
const [otherImage, setOtherImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")

export const handleChangeType = () => {
    if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
      setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1651272222~hmac=22e7fb213a609112bd676ec3a120b36f")
      setShow(true)
  
    }else{
      setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
      setShow(false)
    }
}

export  const newType = () => {
    if(otherImage == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
      setOtherImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1651272222~hmac=22e7fb213a609112bd676ec3a120b36f")
      setOtherShow(true)
  
    }else{
      setOtherImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
      setOtherShow(false)
    }
}