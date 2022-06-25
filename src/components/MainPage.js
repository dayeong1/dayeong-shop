import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

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
          <div id="header">
          <div id="header-area">
              <img src="icons/logo.png" alt="" />
          </div>
          </div>
          <div id="body">
              <div id="banner">
                  <img src="banners/banner1.png" alt="" />
              </div>
              <h1>Products</h1>
              <div id="product-list">
                {products.map((product, idx)=>{
                  return(
                    <div className="product-card" key={idx}>
                      <Link className="product-link" to={`/ProductPage/${idx}`}>
                        <div>
                          <img className="product-img" src={product.imageUrl} alt={product.name}/>
                        </div>
                        <div className="product-contents">
                          <span className="product-name">{product.name}</span>
                          <span className="product-price">{product.price}원</span>
                          <div className="product-seller">
                            <img className="product-avatar" src="images/icons/avatar.png"  alt={product.seller} / >
                            <span>밥집</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
          </div>
          <div id="footer">
              <a href="#">회사소개</a><a href="#">이용약관</a><a href="#">통신판매업:123-1234</a><a href="#">사업자등록번호:456-56-78951</a><a href=""></a>
          </div> 
        </>
      );
};

export default MainPage;