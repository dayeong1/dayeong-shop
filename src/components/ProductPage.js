import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
		.get(`https://14021502-e60f-47ec-95c0-cee18b842771.mock.pstmn.io/products/${id}`)
		.then((result) => {setProduct(result.data);})
		.catch((error) => {console.log(error)})
	}, [])

	if(product===null){
		return <h1>상품정보를 받고 있습니다.</h1>
	}

	return (
		<div>
			<button onClick={() => navigate(-1)} id="back-btn">이전화면</button>
			<div id="image-box">
				<img src={`/${product.imageUrl}`} alt={product.name} />
			</div>
			<div id="profile-box">
				<img src="../images/icons/avatar.png" alt={product.seller}/>
				<span className="product-seller">{product.seller}</span>
			</div>
			<div id="contents-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price}원</div>
				<div id="createAt">2022.6.26</div>
				<div id="description">{product.description}</div>
			</div>
		</div>
	);
};
export default ProductPage;