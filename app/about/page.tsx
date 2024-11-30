import React from "react";

const About = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const json = await res.json();

  return <div>{JSON.stringify(json)}</div>;
};

export default About;
