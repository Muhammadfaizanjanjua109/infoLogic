import PageHeaders from '@/common/PageHeaders'
import Image from 'next/image'
import side from '../../assets/images/aboutPageSide.png'
import React from 'react'
function About() {
  return (
<>

<PageHeaders name='About us' textBelow='Somethings you should know about us' />

<div className='d-flex w-100 flex-column bg-black'>

    <h1 className='text-center text-light p-4 mb-4 '>About Us</h1>
    <div className='w-100  d-flex justify-content-center align-items-center'>
    <p className='text-light text-center w-75 '>
    Logics.ai, continue to Innovate even after years of proven success.<span className='bg-primary'>
    We use revolutionary technologies to
create web3 and AI solutions that are future-proof for tech-savvy startups, scale-ups, and businesses.
        </span> 
Logics.ai is a software development firm that focuses on applying technology in creative ways to address
significant societal concerns. In order to give you an impression of what it's like to work with us, we'd like
to tell you a little bit about the culture of our business.

    </p>
    </div>


    <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6'>
     <div>
     <h1 className='text-light font-primary ps-4 pb-0'>Our</h1>
            <h1 className='text-primary font-primary fw-bolder  ps-4 pb-0'> Mission</h1>
            <p className='text-light p-4'>At Logics.ai, our mission is to revolutionize industries
and enhance the human experience through
cutting-edge AI and Machine Learning solutions.
Logics.ai is dedicated to creating intelligent Web &
Mobile Applications that empowers businesses and
individuals to unlock the full potential of data-driven
decision-making, automation, and innovation.</p>
        </div>
     <div>
     <h1 className='text-light font-primary ps-4 pb-0'>Our</h1>
            <h1 className='text-primary font-primary fw-bolder  ps-4 pb-0'> Vision</h1>
            <p className='text-light p-4'>Logics.ai envision a world where AI and Machine
Learning technologies serve as indispensable partners,
helping organizations and individuals optimize
operations, solve complex challenges, and achieve
exceptional levels of success. By harnessing the power
of artificial intelligence, we as company strive to
foster a future where human creativity and ingenuity
are amplified, resulting in a more efficient,
sustainable, and equitable society  </p>
        </div>
   











      
        <div>

     </div>




        </div>
        <div className='col-lg-6 col-md-6 col-sm-0 sm-d-none'>

<Image src={side} alt='about Side' className='w-100 h-75' />




        </div>
    </div>



</div>

<div className='d-flex justify-content-center align-items-center w-100 flex-column border border-light p-5 bg-primary'>
            <h1 className='text-center h1 fw-bolder text-light'>Working With Us</h1>
            <p className='text-light'>Team at Logics.ai go above and beyond to serve our clients as a trustworthy, enthused technological partner
by providing crucial input to their projects including company planning, product development, fund-raising,
and taking advantage of business prospects. Many of our clients grow to think of us as their de facto
technical team, and our ties with them extend for many years.
You will discover us to be really amenable to get along with because of our open, laid-back, and down to
earth interpersonal manner. When necessary, we are also straightforward, open, and persuasive, but our
main goal is maximizing the value we can provide for our clients. We want our clients to find their
interactions with us to be focused, enlightening, occasionally difficult, but very rarely predictable, and
definitely enjoyable.</p>
    </div>
</>
  )
}

export default About