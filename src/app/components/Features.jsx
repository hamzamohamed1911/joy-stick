import Image from 'next/image'
import { featureData } from '../_constants'

const Features = () => {
  return (
<div>
  
  <div className=' flex flex-col justify-center items-center text-center my-6'>
     <h1 className='font-bold text-2xl py-4'>ما يميز JoyStick</h1>
        <p className='text-lg max-w-lg leading-7 text-[#6D7280]'>
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
        </p>
     </div>
     
  <div className='flex  py-6 space-y-4 justify-center flex-wrap gap-6 my-6'>
        {featureData.map((feature) => (
          <div key={feature.id} className='flex flex-col justify-center text-center items-center space-y-4'>
            <Image alt='feature Logo' src={feature.logo} />
            <h3 className='font-semibold'>{feature.title}</h3>
            <p className='text-[#6D7280] text-md max-w-xs'>{feature.description}</p>
          </div>
        ))}
   </div>
  
  </div>
  )
}

export default Features
