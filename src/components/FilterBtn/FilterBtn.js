import React from 'react';

export const FilterBtn = ({ text, index, name, setState}) => {
	return (
			<div className='my-3 ms-2'>
				<input
                    onClick={() => setState(text)}
					type="radio"
					className="btn-check"
					id={`${name} ${index}`}
					autoComplete="off"
                    name={name}
				/>
				<label className="btn btn-outline-primary" htmlFor={`${name} ${index}`}>
					{text}
				</label>
			</div>
	);
};
