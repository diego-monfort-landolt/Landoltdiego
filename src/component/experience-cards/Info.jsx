import './review.css'


const Info = ({info}) => {
  return (
    <>
    <h3 className='info-txt'>{info}</h3>
    </>
  )
}
Info.propTypes = {
  // eslint-disable-next-line no-undef
  info: PropTypes.string.isRequired,
}


export default Info