import './review.css'

import Bild1 from '../../images/html.png'
// import Bild2 from '../../images/css.png'
// import Bild3 from '../../images/js.png'
// import Bild4 from '../../images/node.png'
// import Bild5 from '../../images/atom.png'
const Review = () => {
  return (
    <>
    <div className="review">
      <img src={Bild1} className='review-img' />
      <div className="review-body">
        <h4 className="review-title">Title</h4>
        <p className="review-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium optio pariatur magnam quam, vel autem veritatis distinctio. Repellendus, provident eius rem maxime fugit consectetur molestiae, saepe nihil libero, tempore dicta?
       </p>
      </div>
    </div>
    </>
  )
}

export default Review