import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import { waitForElementToBeRemoved } from "@testing-library/react";

const MainPage = () => {
  const [products, setProducts] = React.useState([]);
	React.useEffect(() => {
		axios
			.get("https://14021502-e60f-47ec-95c0-cee18b842771.mock.pstmn.io/products")
			.then(function (result) {
				const products = result.data.products;
				setProducts(products);
			})
			.catch(function (error) {
				console.log("에러발생:", error);
			});
	}, []);

	React.useEffect(()=>{
    axios
      .get("https://14021502-e60f-47ec-95c0-cee18b842771.mock.pstmn.io/products")
      .then((result) => {
        const products = result.data.products;
        setProducts(products)
      })
      .catch((error) => {
        console.log(`통신실패: ${error}`);
      });
    }, []);
    return (
      <>
        <div id="body">
          <div id="banner">
            <img src="banners/banner1.png" alt="" />
          </div>
          <h1>Products</h1>
          <div id="product-list">
            {products.map((product, idx)=>{
              return(
                <div className="product-card" key={idx}>
                  <Link className="product-link" to={`/ProductPage/${product.id}`}>
                    <div>
                      <img className="product-img" src={product.imageUrl} />
                    </div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img className="product-avatar" src="images/icons/avatar.png" />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                );
            })}
          </div>
        </div>
      </>
    );
};

export default MainPage;