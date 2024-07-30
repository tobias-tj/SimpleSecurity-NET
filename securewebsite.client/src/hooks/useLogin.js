import { useState } from "react";
import { loginService } from "../services/loginService";


const useLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name] : type === "checkbox" ? checked : value
        });
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        const dataToSend = {
            Email: formData.email,
            Password: formData.password,
            Remember: formData.remember
        };

        const result = await loginService(dataToSend);
        if(result.success){
            localStorage.setItem("user", dataToSend.Email)
            document.location = "/"
        }else{
            setErrorMessage(result.data.message || 'Something went wrong, please try again.');
        }
    };

    return{
        formData,
        handleChange,
        loginHandler,
        errorMessage
    };
}

export default useLogin;