import Account from '../assets/icons8-test-account-100.png';
import { GitFork, Linkedin, LucideMessageCircleCode } from 'lucide-react';
import useUserInfo from '../hooks/useUserInfo';


function Home() {
    document.title = "Welcome"
    
    const { userInfo } = useUserInfo();

    return (
        <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
        <img
          className="inline-flex object-cover border-4 border-indigo-600 rounded-full text-indigo-600 h-34 w-34"
          src={Account}
          alt=""
        />
        <h1 className="text-2xl text-gray-500 font-bold mt-2">{userInfo.name}</h1>
        <h2 className="text-base md:text-xl text-gray-500 font-bold">
          {userInfo.email}
        </h2>
        <ul className="flex flex-row mt-2">
          <li className="mx-2">
            <a href="" target="_blank">
                <GitFork className='rounded-full bg-gray-950/10 h-7 w-7 text-white transition-colors hover:bg-blue-900' />
            </a>
          </li>
  
          <li className="mx-2">
            <a href="" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                <Linkedin className='rounded-full bg-gray-950/10 h-7 w-7 text-white transition-colors hover:bg-blue-900' />
            </a>
          </li>
  
          <li className="mx-2">
            <a href="" target="_blank" aria-label="Email" rel="noopener noreferrer">
              <LucideMessageCircleCode className='rounded-full bg-gray-950/10 h-7 w-7 text-white transition-colors hover:bg-blue-900' />
            </a>
          </li>
        </ul>
      </header>
    );
    
}

export default Home;