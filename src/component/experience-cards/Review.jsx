import './review.css'

const Review = ({ title, text, image }) => {
  return (
    <>
    <div className="review">
      <img src={ image } className='review-img' />
      <div className="review-body">
        <h4 className="review-title">{ title }</h4>
        <p className="review-text">{ text }</p>
      </div>
    </div>
    </>
  )
}

export default Review