import { createContext } from "react";
import { useContext, useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/api/products');
                setProductList([...response.data.products])
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])


    return (
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };