import axios from "axios";
import React, { useEffect, useState } from "react";
import DogCard from "../../components/dogCard/DogCard";
import "./dog.css";

export default function Dog() {
  const [dog, setDog] = useState("");
  const [dogArr, setDogArr] = useState([]);

  let getDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data);
        setDog(res.data.message);
        setDogArr((oldArr) => [...oldArr, res.data.message]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div>
      <div className="button-row">
        <a
          href="#!"
          className="waves-effect waves-deep-purple btn-flat"
          onClick={getDog}
        >
          MORE DOG..
        </a>
      </div>
      <div className="dog-Images">
        {dogArr.map((el, index) => {
          return <DogCard dogImg={el} key={index} />;
        })}
      </div>
    </div>
  );
}
