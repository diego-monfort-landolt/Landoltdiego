
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
      <h2 className='contT'>Unas cuantas imagenes...</h2>
      <div className='contact-img'>
        <img src={im1} alt='' />
        <img src={im2} alt='' />
        <img src={im3} alt='' />
        <img src={im4} alt='' />
        <img src={im5} alt='' />
        <img src={im6} alt='' />
      </div>
    </div>
    </>
  )
}

export default ContactCard