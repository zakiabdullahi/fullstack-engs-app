// import { useEffect, useState } from "react";
// import axios from "axios";

// const UnVerifiedEngs = () => {
//   const [engineers, setEngineers] = useState([]);
//   useEffect(() => {
//     const fetchEngineers = async () => {
//       const { data } = await axios.get(
//         "http://localhost:8000/api/v1/engs/readUnVerified-engs"
//       );

//       console.log(data);
//       setEngineers(data);
//     };
//     fetchEngineers();
//   }, []);
//   const handleRemove = async (id) => {
//     console.log(id);
//     const { data } = await axios.put(
//       `http://localhost:8000/api/v1/engs/readEng/${id}`,
//       {
//         verified: true,
//       }
//     );
//     console.log(data);
//   };

//   return engineers.map((eng) => (
//     <>
//       <div className="flex justify-between items-center space-x-2">
//         <div
//           key={eng._id}
//           className="w-full border border-gray-400  p-2 rounded-md"
//         >
//           <h1>{eng.name}</h1>
//         </div>
//         <button
//           onClick={() => handleRemove(eng._id)}
//           className="bg-indigo-500 text-white rounded-md py-2 px-2 m-2"
//         >
//           Remove
//         </button>
//       </div>
//     </>
//   ));
// };

// export default UnVerifiedEngs;
