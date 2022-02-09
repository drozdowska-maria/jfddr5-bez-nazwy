import { useContext } from "react";
import ServicesList from "../components/CategoryList/ServicesList";
import { businessItemContext } from "../contexts/BusinessItemContext";
import styles from "./ProductView.module.css";
import RatingList from "../components/CategoryList/RatingList";

const ProductView = ({ servicesList, ratingList }) => {
	const [activeBusiness] = useContext(businessItemContext);
	console.log(activeBusiness);
	return (
		<div className={styles.content}>
			<div className={styles.section}>
				<div className={styles.photo}>
					<img src={activeBusiness.photo} />
				</div>
				<div className={styles.header}>
					<h1>{activeBusiness.name}</h1>
					<h3>
						{activeBusiness.city}, {activeBusiness.contact.street}
					</h3>
				</div>
				<div className={styles.services}>
					<h2>Usługi</h2>
					<ServicesList
						servicesList={servicesList}
						business={activeBusiness}
					/>
				</div>
				<div className={styles.opinions}>
					<h2>Opinie</h2>
					<RatingList
						ratingList={ratingList}
						key={activeBusiness.id}
					/>
				</div>
			</div>
			<div className={styles.info}>
				<div>
					<h4>O nas</h4>
					<p>
						loremipsum loremipsum loremipsum loremipsum loremipsum
						loremipsum loremipsum loremipsum
					</p>
					{/* dodać product.info do bazy */}
				</div>
				<div className={styles.infoHours}>
					<h4>Godziny otwarcia </h4>
					{/* dodać godziny otwarcia */}
					<p>
						Poniedziałek <span>10:00 - 16:00</span>
					</p>
					<p>
						Wtorek <span>10:00 - 16:00</span>
					</p>
					<p>
						Środa <span>10:00 - 16:00</span>
					</p>
					<p>
						Czwartek <span>10:00 - 16:00</span>
					</p>
					<p>
						Piątek <span>10:00 - 16:00</span>
					</p>
					<p>
						Sobota <span>zamknięte</span>
					</p>
					<p>
						Niedziela <span>zamknięte</span>
					</p>
					<h4>Kontakt</h4>
					<p>
						Telefon <span>{activeBusiness.contact.phone}</span>
					</p>
					<p>
						E-mail <span>{activeBusiness.contact.email}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
