import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card';

export const SingilPage = () => {
	const { id } = useParams();
	const navga = useNavigate();
	const [datas, setData] = useState([]);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className='container'>
			<button className="btn-back bg-warning btn mb-4" onClick={() => navga(-1)}>
				Back
			</button>
            {console.log(datas)}
            
            <div className="card" style={{width: '18rem'}}>
            <img src={datas.image} className="card-img-top" alt={datas.name} />
            <div className="card-body">
                <h5 className="card-title">{datas.name}</h5>
                <p className='card-item-location text-bg-primary my-2 p-2 me-2'>{datas.species}</p>
                <p className='card-item-location mt-2 mb-2'>Status : {datas.status}</p>
                <p className='card-item-frest'>Gender: <span className='text-info'> {datas.gender}</span></p>
            </div>
            </div>
		</div>
	);
};
