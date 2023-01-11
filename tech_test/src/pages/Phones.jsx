import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Phones() {
  const [phones, setPhones] = useState([]);

  const fetchPhones = async () => {
    const response = await fetch("http://localhost:5005/api/phones");
    const phones = await response.json();
    setPhones(phones);
  };

  useEffect(() => {
    fetchPhones();
  }, []);
  return (
    <div>
      <h1 className="font-playfair font-semibold text-5xl">Phones</h1>
      {phones.map((phone) => (
        <div key={phone.id}>
          <h2>
            {" "}
            <Link to={`/${phone.id}`}>{phone.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Phones;
