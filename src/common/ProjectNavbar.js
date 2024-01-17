'use client'
import React, { useState } from 'react';

function ProjectNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const Project = [
    {
      image: 'https://bicontent.businessinsurance.com/97c14ec5-699b-482a-9604-0f4785bb9e35.jpg',
      projectName: 'Project1',
      description: 'lorem ipsum asda kasdkjas d',
    },
    {
      image: 'https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence.jpg',
      projectName: 'Project2',
      description: 'lorem ipsum asda kasdkjas d',
    },
    {
      image: 'https://www.orangemantra.com/blog/wp-content/uploads/2017/07/FROM-RAND-CORP-1024x512.jpg',
      projectName: 'Project3',
      description: 'lorem ipsum asda kasdkjas d',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Project.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + Project.length) % Project.length);
  };

  return (
    <>
      <div className='row bg-black m-0 p-0 pb-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 m-5 rounded'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {Project.map((item, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                  <img height={'250'} src={item.image} className="d-block w-100" alt={item.projectName} />
                </div>
              ))}
            </div>
         
          </div>
        </div>

        <div className='col-lg-5 col-md-5 col-sm-12'>
          <h1 className='font-primary mt-4 text-center text-light'>{Project[activeIndex].projectName}</h1>
          <p className='text-light'>{Project[activeIndex].description}</p>
        </div>


        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around w-75'>
        <button  className=" font-primary btn btn-primary" onClick={handlePrev}>

        Previous
            </button>
            <button className=" font-primary btn btn-primary" onClick={handleNext}>
            Next
            </button>
        </div>
      </div>
    </>
  );
}

export default ProjectNavbar;
