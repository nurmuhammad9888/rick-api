import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Filter } from '../../components/Filter/Filter';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';

export const Character = () => {
	const [page, setPages] = useState(1);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState("");
	const [gender, setGender] = useState("");
	const [species, setSpecies] = useState("");

	const { info, results } = data;

	let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		(async () => {
			const data = await fetch(api).then((res) => res.json());
			setData(data);
		})();
	}, [api]);

	return (
		<div className="container">
			<h1 className="text-center mt-4 title">The Rick and Morty</h1>
			<Search setSearch={setSearch} setPages={setPages}/>
			<div className="row">
				<div className="col-3">
					<Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
				</div>
				<div className="col-9">
					{results?.length ? (
						<>
							<ul className="card-list list-unstyled d-flex flex-wrap mt-5">
								{results.map((el) => (
									<Card 
										key={el.id}
										image={el.image}
										name={el.name}
										status={el.status}
										species={el.species}
										location={el.location.name}
										gender={el.gender}
										id={el.id}
									/>
								))}
							</ul>
							<Pagination countPage={info?.pages} setPages={setPages} page={page}/>
						</>
					) : (
						<h2 className='my-4 text-light'>Not found</h2>
					)}
				</div>
			</div>
		</div>
	);
};
