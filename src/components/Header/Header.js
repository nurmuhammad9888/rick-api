import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<div className=" m-0 shadow bg-light">
            <div className='container'>
                <ul className='list-unstyled d-flex justify-content-between align-items-center py-3'>
                    <li>
                        <Link className='text-decoration-none fs-3' to={'/'}>The Rick</Link>
                    </li>
                    <li>
                        <ul className='d-flex list-unstyled'>
                            <li className='ms-4'>
                                <NavLink className={({isActive}) => isActive ? "text-decoration-none text-secondary fs-5" : "text-decoration-none fs-5"} to={'/'}>Character</NavLink>
                            </li>
                            <li className='ms-4'>
                                <NavLink className={({isActive}) => isActive ? "text-decoration-none text-secondary fs-5" : "text-decoration-none fs-5"} to={'/location'}>Location</NavLink>
                            </li>
                            <li className='ms-4'>
                                <NavLink className={({isActive}) => isActive ? "text-decoration-none text-secondary fs-5" : "text-decoration-none fs-5"} to={'/episode'}>Episode</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
		</div>
	);
};
