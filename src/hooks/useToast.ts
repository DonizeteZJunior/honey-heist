import { toast } from "react-toastify";

const UseNotificacao = (msg:string, status = null) => {
    if(!status){
        toast.success(msg, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'dark'
        })
    }
    else if(status === 'error'){
        toast.error(msg, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'dark'
        })
    }
}

export default UseNotificacao;