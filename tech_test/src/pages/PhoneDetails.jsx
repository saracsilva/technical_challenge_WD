import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhoneDetails() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState([]);
  console.log(phoneId, "ola");

  const fetchPhone = async () => {
    const response = await fetch(`http://localhost:5005/api/phones/${phoneId}`);
    const phone = await response.json();
    setPhone(phone);
  };

  useEffect(() => {
    fetchPhone();
  }, []);
  console.log("projectId -->", phoneId);
  return (
    <div className="flex align-center flex-col justify-center items-center ">
      <h1 className="font-playfair font-semibold text-3xl">{phone.name}</h1>
      <h2>Color: {phone.color}</h2>
      <img className="w-1/3" src={`./assets/images/${phone.imageFileName}`} />
    </div>
  );
}

export default PhoneDetails;
