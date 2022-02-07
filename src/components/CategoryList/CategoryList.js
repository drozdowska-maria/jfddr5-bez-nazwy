import { useEffect, useState } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";
import { getServicesList } from "../../utils/db";
import s from "./CategoryList.module.css";
const CategoryList = ({
	business,
	setServicesList,
	servicesList,
	category,
}) => {
	useEffect(() => {
		getServicesList(setServicesList, business.id);
		return setServicesList([]);
	}, []);
	console.log(business.photo);
	return (
		<div>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
			</div>
			<div className={s.panel}>
				<div>
					<img src={business.photo} width="350"></img>
				</div>
				<div className={s.panelServices}>
					{servicesList.map((bus) => (
						<div key={bus.businessId}>
							{bus.businessId === business.id
								? bus.services.map((service) => (
										<div
											key={service.id}
											className={s.servicesList}>
											<div className={s.servicesListName}>
												{service.name}
											</div>
											<div
												className={s.servicesListPrice}>
												{service.price}zł
											</div>
											<button
												className={s.servicesButton}>
												Zarezerwuj
											</button>
										</div>
								  ))
								: null}
						</div>
					))}
				</div>
			</div>
			<hr />
		</div>
	);
};

export default CategoryList;
