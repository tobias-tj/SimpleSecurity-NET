import { useEffect } from 'react';
import SecurityLogo from '../assets/icons8-cyber-security-100.png';
import useLogin from '../hooks/useLogin';

function Login() {
    useEffect(() => {
        document.title = "Login";
        const user = localStorage.getItem("user");
        if(user){
            document.location = "/";
        }
    }, [])
    
    const { formData, handleChange, loginHandler, errorMessage } = useLogin();
    


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                className="mx-auto h-12 w-auto"
                src={SecurityLogo}
                alt="Security Logo"
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Login account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                Or 
                <a href="/register" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"> create your account </a>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={loginHandler}>
                        <div className="mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
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
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                        </div>

                        <div className='mt-3 p-1'>
                            <div className="mt-1 relative rounded-md shadow-sm p-1">
                                <input 
                                    type='checkbox' 
                                    name='remember' 
                                    id='remember' 
                                    checked={formData.remember} 
                                    onChange={handleChange}
                                />
                                <label htmlFor='remember' className="text-sm font-medium leading-5 text-gray-700 ml-2">Remember Password?</label>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                            LogIn
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

export default Login;