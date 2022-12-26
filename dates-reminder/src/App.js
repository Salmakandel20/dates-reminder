import './index.css';
import {Button,Row,Col,Container} from "react-bootstrap"
import {person} from "./data"
import { useEffect, useState } from 'react';
function App() {
  const [personData,setPersonData]=useState([])
  const onDelete = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }
  useEffect(()=>{
    onDelete()
  },[])
  return (
   <div className='font colo-body'>
   <Container className="py-5 ">
   <Row className="justify-content-center">
    <Col sm="8" className=''>
    You have {personData.length} appointments
    </Col>
   </Row>
   <Row className="justify-content-center">
    <Col sm="8" className=''>
    <div className='rectangle p-2'>
    {personData.length ?(personData.map((item,index)=>{
   return( <div className="d-flex m-3 border-bottom" key={index}>
     <img src={item.img} className='img-avater'></img>
        <div className='px-3'>
         <p className='fs-5 d-inline'>{item.name}</p>
           <p className='fs-6'>{item.date}</p>
        </div>
    </div>)
        })):<div>No Appointments</div>}
   </div>
   </Col>
  </Row>
    <Row className="justify-content-center py-2">
    <Col sm="8" className=' d-flex justify-content-between '  >
    <button className='btn-style p-2' onClick={onDelete}>clear All</button>
    <button className='btn-style p-2' onClick={onViewData}>view All</button>


    </Col>
   </Row>
    </Container>
   </div>
  );
}

export default App;
