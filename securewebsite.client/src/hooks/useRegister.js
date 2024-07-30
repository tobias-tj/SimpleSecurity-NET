import { useState } from "react";
import { registerService } from "../services/registerService";

const useRegister = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        PasswordHash: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        });
    };

    const registerHandler = async (e) => {
        e.preventDefault();
        const newUserName = formData.Name.trim().split(" ").join("");
        const dataToSend = {
            ...formData,
            UserName : newUserName
        };
        const result = await registerService(dataToSend);
        if(result.success){
            localStorage.setItem("user", formData.Email);
            document.location = "/login";
        }else{
            setErrorMessage(result.data.message || 'Something went wrong, please try again.');
        }
    };

    return{
        formData,
        handleChange,
        registerHandler,
        errorMessage
    };

};

export default useRegister;