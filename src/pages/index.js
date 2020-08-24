import Link from "next/link";
import Container from "../../components/container";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../lib/allProducts";

function Index({ data }) {
  const [products, setProducts] = useState(data);

  // useEffect(async () => {
  //   if (!data.length) {
  //     fetch(`https://fakestoreapi.com/products`)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }
  // }, []);

  return (
    <Container>
      <div className="row">
        {products
          ? products.map((item, j) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link
                  as={`/${item.category}/${item.id}`}
                  href="/[category]/[product]"
                >
                  <div className="card">
                    <img src={item.image} width="200px" height="180px" />
                    <div className="pt-2">
                      <p>
                        <b>{item.title}</b>
                      </p>
                      <h5>Rs. {item.price}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : "...loading"}
      </div>
    </Container>
  );
}

Index.getInitialProps = async (ctx) => {
  // if (!ctx.req) {
  //   return { data: [] };
  // }
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return { data };
  } catch (err) {
    console.log(err.message);
    return { data: getAllProducts() };
  }
};

export default Index;
