import { NavLink } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import './index.css';
import { AppContext } from '../../Context';
import { useContext } from 'react';

function Navar() {

    const context = useContext(AppContext);

    return(
        <div className='nav w-full h-4 flex justify-between items-center p-5 fixed top-0 left-2/4'>
            <figure className='w-auto h-auto'>
                <NavLink to={'/react-webSite-CS-GO'}>
                    <img className='w-10 h-10 cursor-pointer' src="https://img.icons8.com/color/48/counter-strike.png" alt="counter-strike"/>
                </NavLink>
            </figure>

            <div>
                <ul className='flex gap-4 text-black font-semibold'>
                    <li 
                        
                        className='nav-menu cursor-pointer'
                    >
                        <NavLink
                            to={'articles'}
                        >
                            Categorias
                        </NavLink>
                    </li>
                    <li 
                        className='nav-menu cursor-pointer'
                    >
                        <NavLink to={'caracteristicas'}>
                            Características
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className=' w-auto h-auto'>
                <UserCircleIcon className='text-white w-8 cursor-pointer'/>
            </div>
        </div>
    );
}

export { Navar };