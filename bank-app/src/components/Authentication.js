class Authentication{
    loginSuccessfuly(username,password){
        console.log('login Successfuly')
        sessionStorage.setItem('User', username);
    }

    logout(){
        sessionStorage.removeItem('User');
    }

    loggedin(){
        const user = sessionStorage.getItem('User')
        if(user === null) return false
        return true
    }
}

export default new Authentication();
