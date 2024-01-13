import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const navigate = useNavigate()

    const [shippingInfo, setShippingInfo] = useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    });

    const changeHandler=(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{

      setShippingInfo(prev=>({...prev, [e.target.name]:e.target.value}));
    };

  return (
    <div className="shipping">
        <button className="back-btn" onClick={()=>navigate("/cart")}> <BiArrowBack/></button>

        <form action="">
            <h1>SHIPPING ADDRESS</h1>
            <input
            required type="text" 
            placeholder="Address"
            name="address" 
            value={shippingInfo.address} 
            onChange={changeHandler} />

            <input
            required type="text" 
            placeholder="City"
            name="city" 
            value={shippingInfo.city} 
            onChange={changeHandler} />

            <input
            required type="text" 
            placeholder="State"
            name="state" 
            value={shippingInfo.state} 
            onChange={changeHandler} />

           <select name="country" required value={shippingInfo.country} onChange={changeHandler}>

          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="america">America</option>
          <option value="korea">Korea</option>
          <option value="australia">Australia</option>

           </select>
           <input
            required type="number" 
            placeholder="Pin Code"
            name="pinCode" 
            value={shippingInfo.pinCode} 
            onChange={changeHandler} />


            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}

export default Shipping