import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Buttons from "./Components/Buttons";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getdata() {
    setLoading(true);
    setError(null);
    try {
      const responce = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );
      setUserData(responce.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load images. Try again.");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  let printUserData = null;

  if (loading) {
    printUserData = (
      <div className="w-full col-span-full flex items-center justify-center py-16">
        <h3 className="text-gray-400 text-lg">Loading....</h3>
      </div>
    );
  } else if (error) {
    printUserData = (
      <div className="w-full col-span-full flex items-center justify-center py-16">
        <p className="text-red-400">{error}</p>
      </div>
    );
  } else if (userData.length === 0) {
    printUserData = (
      <div className="w-full col-span-full flex items-center justify-center py-16">
        <p className="text-gray-400">No images found.</p>
      </div>
    );
  } else {
    printUserData = userData.map(function (elem, idx) {
      // picsum items usually have an 'id' field — use it when available
      const key = elem.id ?? idx;
      return (
        <div key={key}>
          <Cards elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* main content area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        {/* responsive grid:
            - mobile: 1 col
            - sm: 2 cols
            - md: 3 cols
            - lg: 4 cols
            - xl: 5 cols
         */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {printUserData}
          </div>

          {/* Buttons (pagination) — center on small screens and right on larger */}
          <div className="mt-6 flex justify-center md:justify-end">
            <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
