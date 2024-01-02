export const isValidEmail = (email: string) => {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i;
    return emailRegex.test(email);
  };

  export const isValidPassword = (pass1:string, pass2:string)=>{
    console.log(pass1,pass2);
    
    const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharacterRegex = /[!@#$%^&*()-=_+{}[\]:;'",.<>?/\\|`~]/;
    if(!pass1 || pass1.length <8){
        return "Password is Invalid. Try Again!"
    }
    if(pass1 !== pass2){
        return "Password Mismatch. Try Again!"
    }
    if(!uppercaseRegex.test(pass1)){
            return "Password must contain at least one upper case letter"
    }
    if(!lowercaseRegex.test(pass1)){
        return "Password must contain at least one lower case letter"
    }
    if(!digitRegex.test(pass1)){
        return "Password must contain at least one Digit"
    }
    if(!specialCharacterRegex.test(pass1)){
        return "Password must contain at least one special character"
    }
    else{
        return ""
    }
  }