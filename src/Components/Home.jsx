import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   fetch("https://fakestoreapi.com/products")
    .then((res) => {
     if(!res.ok) {
        throw new Error("Failed to fetch data");
     }
     return res.json();
    })
    .then((data) => {
        setProducts(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
  }, []);

  if(loading) return <h2>Loading...</h2>;
  if(error) return <h3>Error: {error}</h3>
    
  
    return(
        <div>
        <div id="all" className="container" >
            <h1 style={{marginTop:"40px", color:"rgb(2, 2, 105)", fontFamily:"fantasy"}}>H-CLOTHING</h1>
            <div className="home-page">
                <ul className="navbar">
                    <li><Link to="/all">All</Link></li>
                    <li><Link to="/men">Men's</Link></li>
                    <li><Link to="/women">Women's</Link></li>
                    <li><Link to="/jewulry">Jewulry</Link></li>
                    <li><Link to="/cart">
                     <i className="fas fa-shopping-cart"></i>
                    </Link></li>
                </ul>
            </div>
        </div>
        <div className="search-tag">
                <input type="text" placeholder="Search here" />
            </div>
    <div style={{padding:"20px"}}>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",
            gap:"20px",
        }}
        >
            {products.map((item) => (
                <div className="card-content"
                key={item.id}
                style={{
                    border:"1px solid #ddd",
                    borderRadius:"10px",
                    padding:"15px",
                    textAlign:"center",
                }}
                >
                <img 
                src={item.image}
                alt={item.title}
                style={{ width:"100px", height:"100px", objectFit:"contain"}} />

               <h4>{item.title.slice(0,30)}...</h4>
               <p>${item.price}</p>
               <button className="btn">Add to Cart 🛒</button>
            </div>
            ))}
        </div>
    </div>
        </div>
    );
}