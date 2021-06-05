import React from "react";
import "./word.styles.scss";

export const Word = ({ data }) => {
  const newData = data.list.filter((e) => {
    return e.definition.length > 10;
  });
  return (
    <div className="word-container">
      {newData.map((word) => {
        return (
          <div className="word" key={word.defid}>
            <div>
              <h2 className="title">Definition :</h2>
              <h3>
                {word.definition.split("\n").map((item, idx) => {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </h3>
            </div>
            <div className="ex-w">
              <h2 className="title">Example :</h2>
              <h3>
                <p>
                  {word.example.split("\n").map((item, idx) => {
                    return (
                      <span key={idx}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </p>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
