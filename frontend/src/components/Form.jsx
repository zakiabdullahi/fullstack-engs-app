import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/api/v1/engs/create-eng", { name: name });

    console.log(data);
    setName("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center md:flex-row  lg:w-[600px]  space-x-2"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full py-2 px-3 rounded-lg border border-gray-300 outline-none "
        type="text"
        placeholder="eng"
      />
      <button className="w-24 py-2 px-3 rounded-lg bg-indigo-400 text-white text-md">
        Add Eng
      </button>
    </form>
  );
};

export default Form;
