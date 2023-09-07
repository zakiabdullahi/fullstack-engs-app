import { useEffect, useState } from "react";
import axios from "axios";

const VerifiedEngs = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    const fetchEngineers = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/engs/readVerified-engs"
      );

      console.log(data);
      setEngineers(data);
    };
    fetchEngineers();
  }, [engineers]);

  const handleRemove = async (id) => {
    console.log(id);
    const { data } = await axios.put(`/api/v1/engs/remove/${id}`, {
      verified: false,
    });
    console.log(data);
  };

  return engineers.map((eng) => (
    <div key={eng._id} className="flex items-center  space-x-4 rounded-md ">
      <li className="w-24">{eng.name}</li>
      <button
        onClick={() => handleRemove(eng._id)}
        className="w-24  border border-gray-400   rounded-md py-1 px-1 m-2"
      >
        remove
      </button>
    </div>
  ));
};

export default VerifiedEngs;
