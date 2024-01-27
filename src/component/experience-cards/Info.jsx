import './review.css'
import { AiOutlineClose  } from "react-icons/ai";

// const info = [
//   {
//     id: 1,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   },
//   {
//     id: 2,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   },
//   {
//     id: 3,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   },
//   {
//     id: 4,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   }, 
//   {
//     id: 5,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   },
//   {
//     id: 6,
//     info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
//   },
// ]

const Info = () => {
  return (
    <>
    <div className='overlay'>
      <div className='cont-model'>
        <div className='model-head'>
          <h3 className='info-txt'>Popup</h3>
        </div>
         <button className='close-btn'><AiOutlineClose size={20} /></button> 
      </div>
    </div>
    
    </>
  )
}

export default Info