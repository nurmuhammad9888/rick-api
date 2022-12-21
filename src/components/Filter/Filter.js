import React from 'react';
import { FilterBtn } from '../FilterBtn/FilterBtn';

export const Filter = ({ setStatus, setGender, setSpecies }) => {
    const statusArr = ["alive", "dead", "unknown"];
    const genderArr = ["male", "female", "unknown", "genderless"];

    const speciesArr = ["human", "alien", "humanoid", "poopybutthole", "mythological", "unknown", "animal", "disease", "cronenberg", "planet"];

	return (
		<div>
            <h3 className='text-center text-white'>Filter</h3>

            <p style={{cursor:"pointer"}} className='text-center d-inline-block text-decoration-underline text-white my-3' onClick={() =>{
				setStatus("")
				setGender("")
				setSpecies("")
			}}>Cler all</p>

			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Filter by status
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body d-flex">
                            {
                                statusArr.map((item, index) => (
                                    <FilterBtn key={index} setState={setStatus} text={item} name="status" index={index}/>
                                ))
                            }
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Filter by species
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body d-flex flex-wrap">
                        {
                                speciesArr.map((item, index) => (
                                    <FilterBtn key={index} setState={setSpecies} text={item} name="species" index={index}/>
                                ))
                            }
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Filter by gender
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body d-flex flex-wrap">
                        {
                                genderArr.map((item, index) => (
                                    <FilterBtn key={index} text={item} name="gender" setState={setGender} index={index}/>
                                ))
                            }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
