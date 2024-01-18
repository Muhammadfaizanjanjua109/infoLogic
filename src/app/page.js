import Image from 'next/image'
// import styles from './page.module.css'
import innovate from '../assets/images/inovate.png'
import revolution from '../assets/images/revolution.png'
import office365 from '../assets/images/office365.png'
import mastercard from '../assets/images/mastercard.png'
import asana from '../assets/images/asana.png'
import aws from '../assets/images/aws.png'
import slack from '../assets/images/slack.png'
import ProjectNavbar from '@/common/ProjectNavbar'
export default function Home() {
 const recongImages=[
  office365, mastercard ,asana ,aws ,slack
 ]
  return (
   <>
     <div className='row bg-black border border-light'>
        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
<div className=''>
<h1 className='font-primary text-light h1' style={{fontSize:'4rem'}}>Innovate</h1>
<p className='font-primary text-light ' style={{fontSize:'1.5rem'}}>With AI $ Machine Learning</p>
<p className='text-primary'>An Cutting Edge AI development firm facilitating innovation and swift progess</p>
</div>

        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>

          <Image src={innovate} alt='inovate' className='w-100' />
        </div>
  </div>


  <div className='row bg-black border border-light' >
    <div className='col-lg-4 col-md-6 col-sm-12 border border-light d-flex justify-content-center align-items-center '>
      <Image  src={revolution} alt='inovate' className='w-80 h-100' />
    </div>
    <div className='col-lg-8 col-md-6 col-sm-12   d-flex justify-content-center align-items-start flex-column p-5'>
      <h5 className='h5 text-light fw-bold text-start '>Revolutionize your business with Logics.ai</h5>
      <p className='h5 text-light fw-light font12'>Welcome to Logics.ai! We are your comprehensive partner, specializing in revolutionary web and mobile app development infused with the power of artificial intelligence and machine learning. With extensive experience in pioneering solutions, we empower your business with future-ready technology, enabling you to thrive in the competitive digital landscape. Harness cutting-edge Al and ML tools to enhance efficiency, automate tasks, extract actionable insights, and unleash creativity. Explore the potential of modern tech, including NLP, image recognition, and predictive analytics, through personalized Logics.ai solutions.</p>
    </div>
  </div>


<ProjectNavbar />

<div className='border border-light  pb-2 pt-5 bg-black'>
<div className='mx-auto border border-light p-4 mb-5 w-25'>
  <h5 style={{wordBreak:'break-word' , fontSize:'larger'}}  className='h1 text-center text-light fw-bolder'>Our Recognition</h5></div>

<div className='row pt-2 pb-3 justify-content-around mobResRecong' >
{recongImages.map((index)=>{
return ( <>
<div className='col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center align-items-center'>
<Image src={index} alt={'asd'} />
</div>


</>)
})}


 </div>
</div>


<div className='row m-0 w-100 bg-black border border-light'>
  <h1 className='font-primary text-light w-75 mx-auto pt-4 pb-5'>
  Our decades of experience & knowledge
have been focused on developing
the ideal artificial intelligence solution
for your business
  </h1>
</div>
   </>
  )
}
