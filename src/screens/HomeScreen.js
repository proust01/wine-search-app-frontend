import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './../actions/productActions';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    const { error, products } = useSelector((state) => state.productList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    },[]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const handleClickOutside = (event) => {
        const { current: wrap } = wrapperRef;
        if(wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    }

    return ( 
        <div ref={wrapperRef} className="container">
            <div className="title">Wine Search
                <img className="title-icon" src="./images/wineglass.png" alt="wineglass"/>
            </div>
            <div className="container">
                <div className="search-container">
                    <img className="search-icon" src="./images/Close.png" alt="close"/>
                    <input 
                        className="searchbox" 
                        type="text" 
                        placeholder="Search by lotCode or description"
                        // onClick={() => setDisplay(!display)}
                        value={search}
                        onChange={e => {setSearch(e.target.value); setDisplay(true);}}
                    />
                    {search.length > 0 ? 
                        <img src="./images/xmark.png" alt="x" className="search-icon" onClick={() => setSearch("")} />
                        : <span className="search-icon"></span>
                    }
            </div>

                {display && products
                    .filter(({description, lotCode}) => 
                        description.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                        lotCode.toLowerCase().indexOf(search.toLowerCase()) > -1
                        )
                    .map(product => (
                        <div className="auto-search" key={product.lotCode} tabIndex="0">
                            <Link className="link" to={`/product/${product.lotCode}`} tabIndex="0">
                                <div className="search-content">
                                    <div className="id">
                                        <span className="code">{product.lotCode}</span><span className="description">{product.volume}L</span>
                                    </div>
                                    <div className="description">
                                        <span>{product.description}</span>
                                        <span>{product.tankCode}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                ))};
            </div>
        </div>
     );
}
 
export default HomeScreen;