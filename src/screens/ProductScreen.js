import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";

const ProductScreen = (props) => {
  const [detail, setDetail] = useState(0);
  const [visible, setVisible] = useState(3);

  const productId = props.match.params.id;
  const { error, products } = useSelector((state) => state.productList);
  const product = products.filter((c) => c.lotCode === productId)[0];

  const { loading, productDetails } = useSelector(
    (state) => state.productDetails
  );
  // console.log(productDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!props.match.params.id){
      props.history.push("/")
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, props.history,props.match.params.id]);

  return (
    <div className="container">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className="product-container">
          <div className="icons">
            <Link to="/">
              <i
                className="fa fa-arrow-left"
                aria-hidden="true"
                style={{ fontSize: 30, color: "#3A3B3B" }}
              ></i>
            </Link>
            <Link to={`/product/${productId}/edit`}>
              <img src="../images/edit.png" alt="edit" />
            </Link>
          </div>
          <div className="product-title">
            <img className='w' src="../images/w.png" alt="w" />
            {product.lotCode}
          </div>
          <p className="product-desc">{product.description}</p>
          <div className="s-container">
            <div className="s-row">
              <span className="key">Volume</span>
              <span className="value">{product.volume}</span>
            </div>
            <div className="s-row">
              <span className="key">Tank code</span>
              <span className="value">{product.tankCode}</span>
            </div>
            <div className="s-row">
              <span className="key">Product state</span>
              <span className="value">{product.productState}</span>
            </div>
            <div className="s-row">
              <span className="key">Owner</span>
              <span className="value">{product.ownerName}</span>
            </div>
          </div>

          <div className="product-table">
            <div className="th">
              <button
                className={`key ${detail === 0 && "first"}`}
                onClick={() => {
                  setDetail(0);
                  setVisible(3);
                }}
              >
                Year
              </button>
              <button
                className="key"
                onClick={() => {
                  setDetail(1);
                  setVisible(3);
                }}
              >
                Variety
              </button>
              <button
                className="key"
                onClick={() => {
                  setDetail(2);
                  setVisible(3);
                }}
              >
                Region
              </button>
              <button
                className="key"
                onClick={() => {
                  setDetail(3);
                  setVisible(3);
                }}
              >
                Year & Variety
              </button>
            </div>
            <div className="t-bottom">
              <div className="t-result">
                <span>
                  {detail === 0
                    ? "Year"
                    : detail === 1
                    ? "Variety"
                    : detail === 2
                    ? "Region"
                    : "Year&Variety"}
                </span>
                <span>Percentage</span>
              </div>
              {productDetails[detail].breakdown.slice(0, visible).map((c) => (
                <div key={c.lotCode} className="t-result bottom">
                  <span>{c.key}</span>
                  <span>{c.percentage}%</span>
                </div>
              ))}
              {productDetails[detail].breakdown.slice(visible).length > 0 ? (
                <button
                  className="loadbutton"
                  onClick={() => setVisible(visible + 2)}
                >
                  Show more 2+
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
