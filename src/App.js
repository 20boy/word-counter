import React, { useState } from "react";

const App = () => {
  const [counts, setCounts] = useState(0);
  const [space, setSpaces] = useState("Space");
  const handle = (event) => {
    let now = /\s$/;
    let term = /[\b]/;

    let news = event.target.value;
    const getter = now.test(news);
    const termre = term.test(news);
    if (getter) {
      setCounts(counts + 1);
    } else if (termre) {
      console.log("Ahba");
    } else {
      return null;
    }
    if (counts > 0) {
      setSpaces("Spaces");
    }
  };

  return (
    <>
      <div className="App">
        {" "}
        <input size={30} placeholder="Input it" onChange={handle} />
        <p className="badge badge-primary">
          {counts} {space}
        </p>
      </div>
    </>
  );
};

export default App;
