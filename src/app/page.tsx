import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
    <div>
    <Navbar />
    <h1 className="font-bold text-center text-black text-5xl">
  A powerful online engagement tool <br />
  that’s intuitive and simple to use.
</h1>
    <h6 className="text-center">With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.</h6>
    <div className="flex justify-center items-center flex-col">
  <h5 className="bg-light-green text-black/60"></h5>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Get started free
  </button>
</div>
</div>
<Header />
</div>
  );
};
