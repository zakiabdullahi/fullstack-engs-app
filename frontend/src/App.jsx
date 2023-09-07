import Form from "./components/Form";
import ReadAllEngs from "./components/ReadAllEngs";
import VerifiedEngs from "./components/VerifiedEngs";

function App() {
  return (
    <div className=" max-w-4xl mx-auto py-12">
      <div className="flex justify-center items-center">
        <div className="flex flex-col   mt-12">
          <Form />
          <h1 className="mt-5 ">Waiting For Interview </h1>

          <ReadAllEngs />

          <h1 className="mt-5 "> Verified Engineers</h1>
          <VerifiedEngs />
        </div>
      </div>
    </div>
  );
}

export default App;
