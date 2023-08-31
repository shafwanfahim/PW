import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='detel'>
        <div className='textContainer'>
          <h1>
            Hi I'm <span>Shafwan</span>
          </h1>
          <p>
            I am a third-year computer engineering student with an interest in
            embedded systems and full-stack web development. I am working towards
            a bachelor's degree at McMaster University. I have experience using
            C++, Python, JavaScript, and HTML/CSS. I am interested in opportunities
            to contribute meaningfully to various technical fields, so please don't
            hesitate to reach out!
          </p>
        </div>
      </div>
      <div className='images'>
        <img
          src='https://cdn.pixabay.com/photo/2021/02/19/06/08/texture-6029280_1280.png'
          alt='Description of the image'
        />
      </div>
    </div>
  );
}

export default Home;
