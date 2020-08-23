import { useRouter } from "next/router";
import Container from "../../../components/container";
import { useState, useEffect } from "react";

export default function Product({ data }) {
  const [item, setItem] = useState(data);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(async () => {
  //   console.log(data);
  // if(!data){
  //   const res = await fetch(
  //     `https://fakestoreapi.com/products/${router.query.product}`
  //   );
  //   const data = await res.json();
  //   setItem(data);
  // }
  // }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/addProduct", {
      method: "POST",
      body: JSON.stringify({ ...formData, id: item.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      setFormData({});
      alert("Added Successfully");
    }
    setLoading(false);
  };
  console.log(formData);

  return (
    <Container>
      {item ? (
        <>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <img src={item.image} width="100%" height="280px" />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 p-2">
              <h5>{item.title}</h5>
              {item.category}
              <h6>Rs. {item.price}</h6>
              <p>{item.description}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>First Name</label>
                <input
                  value={formData.firstName}
                  className="form-control m-1"
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
              </div>
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>Last Name</label>
                <input
                  value={formData.lastName}
                  className="form-control m-1"
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
              </div>
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>Email</label>
                <input
                  value={formData.email}
                  className="form-control m-1"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>Contact Number</label>
                <input
                  value={formData.contactNumber}
                  className="form-control m-1"
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
                />
              </div>
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>Address</label>
                <input
                  value={formData.address}
                  className="form-control m-1"
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <div className="form-group m-b-5 col-lg-4 col-sm-6 col-xs-12">
                <label>Pincode</label>
                <input
                  value={formData.pincode}
                  className="form-control m-1"
                  onChange={(e) => handleChange("pincode", e.target.value)}
                />
              </div>
            </div>
            <div className="btn-container">
              <button type="submit" disabled={loading} className="btn btn-info">
                {!loading ? "Submit" : "...loading"}
              </button>
            </div>
          </form>
        </>
      ) : (
        "...loading"
      )}
    </Container>
  );
}

Product.getInitialProps = async (ctx) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${ctx.query.product}`
    );
    const data = await res.json();
    return { data };
  } catch (err) {
    console.log(err.message);
    return { data: {} };
  }
};
