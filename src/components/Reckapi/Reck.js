import {React} from 'react';
import "./reck.css"
export const Reck = ({image, name, status, species, location, gender}) => {
    console.log(image);
    return (
        <>
                <li className='card-item'>
                    <img src={image} alt={name} />
                    <div className='ms-4 mt-4'>
                        <h2 className='card-item-title'>{name}</h2>
                        <span className="card-item-text text-info fw-semibold">{status} - </span>
                        <span className="card-item-text text-danger fw-semibold">{species}</span>
                        <p className='card-item-location mt-2 mb-2'>Last known location : {location}</p>
                        <p className='card-item-frest'>Gender: {gender}</p>
                    </div>
                </li>
        </>
    );
};
