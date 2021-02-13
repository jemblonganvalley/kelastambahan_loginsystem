class Login{

    constructor(){
        this.state = {
            input_email : false,
            input_password : false,
            input_password2 : false,
        }
    }

    setInputEmail(event){
        event.preventDefault()
        this.state.input_email = !this.state.input_email
        console.log(this.state.input_email)
    }

    handleLogin(event){
        event.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let helperEmail = document.getElementById('helper_email_error')
        let helperPassword = document.getElementById('helper_password_error')

        //check apakah form terisi
        if(!email){
            helperEmail.style.display = 'flex'

            //kembalikan keadaan helper email ke none
            setTimeout(()=>{
                helperEmail.style.display = 'none'
            }, 2000)
        }

        if(!password){
            helperPassword.style.display = 'flex'

            //kembalikan keadaan helper email ke none
            setTimeout(()=>{
                helperPassword.style.display = 'none'
            }, 2000)
        }
    }

}

const btnLogin = new Login
