


export const handlePassword = ( password, confirmPassword ) => {
    if((password.trim() === confirmPassword.trim()) 
     && (password.trim() != "" && confirmPassword.trim() != "")){
      console.log(password)
    }
    
}

export const handleChangeType = () => {
  if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
    setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1651272222~hmac=22e7fb213a609112bd676ec3a120b36f")
    setChangeType("text")

  }else{
    setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
    setChangeType("password")
  }
}