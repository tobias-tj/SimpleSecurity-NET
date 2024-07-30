import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './ProtectedRoutes';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import DashBoard from './components/DashBoard';
import useLogout from './hooks/useLogout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<DashBoard />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={
                <NotFound />
            }/>
        </Route>
    )
)

function App() {
   const isLogged = localStorage.getItem("user");
   const { logout, logoutMessage } = useLogout();

    return (
        <section>
           <div className='bg-blue-950 text-white p-4 flex justify-between items-center'>
                <div className='text-lg font-semibold'>Simple Security</div>
                <div>
                    {
                        isLogged ? (
                            <div className='flex space-x-4'>
                                <a href='/' className='hover:underline'>Home</a>
                                <a href='/dashBoard' className='hover:underline'>DashBoard</a>
                                <span onClick={logout} className='cursor-pointer hover:underline'>Log out</span>
                            </div>
                        ) : (
                            <div>Bienvenido!</div>
                        )
                    }
                </div>
            </div>

            <RouterProvider router={router} />
            {logoutMessage && (
                <div className="mt-4 text-center text-sm text-red-600">{logoutMessage}</div>
            )}
        </section>
    );
    
}

export default App;