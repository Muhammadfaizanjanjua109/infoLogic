'use client'
import PageHeaders from '@/common/PageHeaders'
import React, { useState  ,useEffect} from 'react'

function page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
  };

  const changeImageAutomatically = () => {
    handleNext();
  };

  useEffect(() => {
    // Set a timer to change the image every 5 seconds (adjust the interval as needed)
    const timerId = setInterval(changeImageAutomatically, 5000);

    // Clear the interval when the component is unmounted or when activeIndex changes
    return () => clearInterval(timerId);
  }, [activeIndex]);
  const image=['https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280',
   'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2018/05/16093651/What-is-AI-2.png',
   'https://neilsahota.com/wp-content/uploads/2022/09/What-is-AI-how-does-it-work.jpg',

  ]
  return (
   <>
   <PageHeaders name='Services' textBelow='our professional expertise' />




   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            
   <div className="carousel-indicators">
          {image.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to={index}
              style={{width:'10px'}}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
            <div className="carousel-inner">
              {image.map((item, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                  <img height={'700'} src={item} className="d-block w-100" alt={item} />
                </div>
              ))}
            </div>
         
          </div>
 

   </>
  )
}

export default page