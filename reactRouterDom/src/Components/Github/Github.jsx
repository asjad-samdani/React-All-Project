/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/asjad-samdani")
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();
  return (
    <div className="text-ceter m-10 bg-gray text-white p-5 text-3xl">
      Github Followers:{data.followers}
      <img src="" alt="" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/asjad-samdani")
  return responce.json();
};
