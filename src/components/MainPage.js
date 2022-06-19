import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  const url =`https://546c0a94-ea04-42e0-8e83-badb01b043d7.mock.pstmn.io/products`;

	React.useEffect(()=>{
    axios
      .get(url)
      .then((result) => {
        products = result.data.products;
        setProducts(products)
      })
      .catch((error) => {
        console.log(`통신실패: ${error}`);
      });
    }, []);

  {
    products.map((product, idx)=>{
      return()
    });
  }
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
                      <div>
                        <img className="product-img" src={product.imgURL} alt="" />
                      </div>
                      <div className="product-contents">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-seller">
                          <img src="images/icons/avatar.png" alt="" className="" />
                          <span>{product.seller}</span>
                        </div>
                      </div>
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