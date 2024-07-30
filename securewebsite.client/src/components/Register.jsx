import { useEffect } from 'react';
import SecurityLogo from '../assets/icons8-cyber-security-100.png';
import useRegister from '../hooks/useRegister';

function Register() {
    useEffect(() => {
        document.title = "Register";
        const user = localStorage.getItem("user");
        if(user){
            document.location = "/";
        }
    },[]);

    const { formData, handleChange, registerHandler, errorMessage } = useRegister();

   
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                className="mx-auto h-12 w-auto"
                src={SecurityLogo}
                alt="Security Logo"
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                Or 
                <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"> login to your account </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={registerHandler}>
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                        Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                        id="name"
                        name="Name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.Name}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    </div>

                    <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder="user@example.com"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    </div>

                    <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input
                        id="password"
                        name="PasswordHash"
                        type="password"
                        required
                        value={formData.PasswordHash}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    </div>

                    <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                        Create account
                        </button>
                    </span>
                    </div>
                </form>
                {errorMessage && <div className="message mt-4 text-center text-sm text-red-600">{errorMessage}</div>}   
                </div>
            </div>
        </div>
    );
    
}

export default Register;