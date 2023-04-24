import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log(data);
  console.log(count);

  useEffect(() => {
    // const fetchData = () => {
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
    //   setLoading(false);
    // };
    const fetchData = async () => {
      const res = await fetch(url);
      const list = await res.json();
      setData(list);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((li, index) => (
            <button className="job-btn" onClick={() => setCount(index)}>
              {li.company}
            </button>
          ))}
        </div>
        {data[count].title}
        {data[count].duties.map((li) => (
          <p>{li}</p>
        ))}
      </div>
    </section>
  );
}

export default App;
