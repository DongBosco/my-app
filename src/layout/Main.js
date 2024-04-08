import React from "react";

function Main({vData}) {
  return (
    <div>
      <div className="visual d-flex">mainVisual</div>

      <div className="container">
        <ul className="proList">
          {vData.map((item) => {
            return (
              <li>
                <img src={`./images/${item.img}`} alt="" />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
