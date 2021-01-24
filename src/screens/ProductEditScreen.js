import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import { Link } from "react-router-dom";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

export default function ProductEditScreen(props) {
  const [lotCode, setLotCode] = useState("");
  const [volume, setVolume] = useState(0);
  const [description, setDescription] = useState("");
  const [tankCode, setTankCode] = useState("");
  const [productState, setProductState] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [year, setYear] = useState(0);
  const [variety, setVariety] = useState("");
  const [region, setRegion] = useState("");

  const productId = props.match.params.id;
  const { products } = useSelector((state) => state.productList);
  const product = products.filter((c) => c.lotCode === productId)[0];
  // console.log(product)

  const { loading, error, success } = useSelector(
    (state) => state.productUpdate
  );
  // console.log(success, loading, error)

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      props.history.push("/");
    }

    if (!product || product.lotCode !== productId || success) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(listProducts());
    } else {
      setLotCode(product.lotCode);
      setVolume(product.volume);
      setDescription(product.description);
      setTankCode(product.tankCode);
      setProductState(product.productState);
      setOwnerName(product.ownerName);
      setPercentage(product.components[0].percentage);
      setYear(product.components[0].year);
      setVariety(product.components[0].variety);
      setRegion(product.components[0].region);
      console.log(product);
    }
  }, [product, productId, dispatch, success, props.history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    product.lotCode = lotCode;
    product.volume = volume;
    product.description = description;
    product.tankCode = tankCode;
    product.productState = productState;
    product.ownerName = ownerName;
    product.components[0].percentage = percentage;
    product.components[0].year = year;
    product.components[0].variety = variety;
    product.components[0].region = region;

    dispatch(updateProduct(product));
  };

  return (
    <div className="container-top">
      <div className="icons">
        <Link to={`/product/${productId}`}>
          <i
            className="fa fa-arrow-left"
            aria-hidden="true"
            style={{ fontSize: 30, color: "#3A3B3B" }}
          ></i>
        </Link>
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <div>
          <h3>{error}</h3>
        </div>
      ) : (
        <div className="edit-container">
          <form className="form" onSubmit={submitHandler}>
            <div>
              <h2>Edit Wine Info</h2>
            </div>
            <>
              <div>
                <label className="key-edit" htmlFor="lotCode">
                  Lot Code
                </label>
                <input
                  className="searchbox"
                  id="lotCode"
                  type="text"
                  placeholder="Enter lot code"
                  value={lotCode}
                  onChange={(e) => setLotCode(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="key-edit" htmlFor="volume">
                  Volume
                </label>
                <input
                  className="searchbox"
                  id="volume"
                  type="text"
                  placeholder="Enter volume"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="key-edit" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="searchbox"
                  id="description"
                  rows="3"
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="key-edit" htmlFor="tankCode">
                  Tank Code
                </label>
                <input
                  className="searchbox"
                  id="tankCode"
                  type="text"
                  placeholder="Enter tank code"
                  value={tankCode}
                  onChange={(e) => setTankCode(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="key-edit" htmlFor="productState">
                  Product State
                </label>
                <input
                  className="searchbox"
                  id="productState"
                  type="text"
                  placeholder="Enter product state"
                  value={productState}
                  onChange={(e) => setProductState(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="key-edit" htmlFor="ownerName">
                  Owner Name
                </label>
                <input
                  className="searchbox"
                  id="ownerName"
                  type="text"
                  placeholder="Enter owner name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                ></input>
              </div>

              <div>
                <div>
                  <h3>{`Components`}</h3>
                  <label className="key-edit" htmlFor="component">
                    Component : Percentage
                  </label>
                  <input
                    className="searchbox"
                    id="percentage"
                    type="text"
                    placeholder="Enter percentage"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="key-edit" htmlFor="component">
                    Component : Year
                  </label>
                  <input
                    className="searchbox"
                    id="year"
                    type="text"
                    placeholder="Enter year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="key-edit" htmlFor="component">
                    Component : Variety
                  </label>
                  <input
                    className="searchbox"
                    id="variety"
                    type="text"
                    placeholder="Enter variety"
                    value={variety}
                    onChange={(e) => setVariety(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="key-edit" htmlFor="component">
                    Component : Region
                  </label>
                  <input
                    className="searchbox"
                    id="region"
                    type="text"
                    placeholder="Enter region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  ></input>
                </div>
              </div>

              <button className="edit-button" type="submit">
                Save
              </button>
            </>
          </form>
        </div>
      )}
    </div>
  );
}
