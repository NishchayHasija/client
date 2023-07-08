import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"; 
import useFetch from "../../hooks/useFetch";


const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

// const data=[
//   {
// id:1
// img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys
// img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys
// title: "Long Sleeve Graphic T-shirt",
// isNew:true,
// oldPrice: 19,
// price: 12,
//   },
//   { 
// id: 2,
// img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
// title: "Coat",
// isNew:true,
// oldPrice: 19,
// price: 12,
// },
// ];


//rkhna hai
//const FeaturedProducts=({type})=> {
  // const data=[
  // {
  // id:1,
  // img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600" ,
  // img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // title: "Long Sleeve Graphic T-shirt",
  // isNew:true,
  // oldPrice: 19,
  // price: 12,
  //   },
  //   { 
  // id: 2,
  // img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // title: "Coat",
  // isNew:true,
  // oldPrice: 19,
  // price: 12,
  // },
  // ];

//original

// const [products, setProducts] = useState([]);
// useEffect (() => {
// const fetchData = async () => {
// try {
// const res = await axios.get(process.env.REACT_APP_API_URL+"/products", {
// header:{
// Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
// },
//  });
//  console.log(data); 
//  //setData(res.data.data)
// }
// catch (err) {
// console.log(err);
// }
// };
// fetchData();
// }, []);
// console.log(data)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Welcome to our curated collection of {type} products. We handpicked these items to showcase the best of what we have to offer. From trendy must-haves to timeless classics, these products have earned the love and trust of our customers. Explore our selection and find something that catches your eye.
        </p>
      </div>
      <div className="bottom">
       {error
          ? "Something went wrong!"
          : loading
          ? "loading" : 
          data?.map(item => (<Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
