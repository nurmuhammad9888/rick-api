import { React } from 'react';
import { Link } from 'react-router-dom';
import "./card.css"
export const Card = ({image, name, status, species, location, gender, id}) => {
    return (
        <>
                <li className='card-item'>
                    <img src={image} alt={name} />
                    <div className='ms-4 mt-4'>
                        <h2 className='card-item-title'>{name}</h2>
                        {
                            (() => {
                                if(status === "Alive"){
                                    return <span className="card-item-text py-2 px-3 bg-success rounded my-2 d-inline-block fw-semibold">{status}</span>
                                }else if(status === "Dead"){
                                    return <span className="card-item-text py-2 px-3 bg-danger rounded my-2 d-inline-block fw-semibold">{status}</span>
                                }else{
                                    return <span className="card-item-text py-2 px-3 bg-secondary rounded my-2 d-inline-block fw-semibold">{status}</span>
                                }
                            })()
                        }
                        <p className='card-item-location text-bg-primary my-2 p-2 me-2'>{species}</p>
                        
                        <p className='card-item-location mt-2 mb-2'>Last known location : {location}</p>
                        <p className='card-item-frest'>Gender: <span className='text-info'> {gender}</span></p>
                        <Link className='btn-item btn btn-primary d-inline-block mb-3' to={`/id/${id}`}> More info </Link>
                    </div>
                </li>
        </>
    );
};
