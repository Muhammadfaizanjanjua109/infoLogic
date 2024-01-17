import React from 'react'
import SectionHeaders from '../assets/images/SectionHeaders.png'
import Image from 'next/image'

function PageHeaders({name='' , textBelow=''}) {
  return (
  <>
    <div className='border border-light bg-dark w-100 justify-content-center d-flex flex-column align-items-center '>

<h1 className='font-primary text-light fw-bolder'>{name}</h1>
<p className='font-primary text-primary'>{textBelow}</p>
<Image src={SectionHeaders} alt='SectionHeaders' />
  </div>
  </>
  )
}

export default PageHeaders