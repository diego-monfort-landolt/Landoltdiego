import './ContactCard.css'
import RollingGallery from './RollingGallery'

const ContactCard = () => {
  return (
    <>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </>
  )
}
export default ContactCard