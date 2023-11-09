
import './ContactCard.css'
import im1 from './imgs/im1.jpg'
import im2 from './imgs/im2.jpg'
import im3 from './imgs/im3.jpg'
import im4 from './imgs/im4.jpg'
import im5 from './imgs/im5.jpg'
import im6 from './imgs/im6.jpg'

const ContactCard = () => {
  return (
    <>
    <div className='ContactCon'>
      <div className='contact-img'>
        <img className='conimg' src={im1} alt='' />
        <img className='conimg' src={im2} alt='' />
        <img className='conimg' src={im3} alt='' />
        <img className='conimg' src={im4} alt='' />
        <img className='conimg' src={im5} alt='' />
        <img className='conimg' src={im6} alt='' />
      </div>
    </div>
    </>
  )
}
export default ContactCard