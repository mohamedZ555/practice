import './card.scss'
import {useState} from 'react'
import img15 from '../images/drawers.jpg'
import img16 from '../images/avatar-michelle.jpg'
import img0 from '../images/icon-share.svg'
import img1 from '../images/icon-facebook.svg'
import img2 from '../images/icon-twitter.svg'
import img3 from '../images/icon-pinterest.svg'

function Card() {
    const [colr,setcolr] = useState(false)
    const [show,setshow]=useState(false)
    function OnClick() {
        setshow(!show)
        setcolr(!colr)
    }
  return (
<>
<div className='card'>
  <div ><img className='img1' src={img15} alt=''></img></div>
  <div className='pad'>
    <h2 className='first-head'>  Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home
</h2>
    <span className='first-pra'>
  Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.</span>
  <div>
    <div className='profile'>
      <img className='img2' src={img16} alt=''></img>
      <div>
        <h4 className='sec-head'>Michelle Appleton</h4>
        <span className='sec-pra'>28 Jun 2020</span>
      </div>
      <button onClick={()=>OnClick(!show)} className='btn' style={{backgroundColor:colr? 'hsl(217, 19%, 35%)':'hsl(212, 23%, 69%)'}}><img style={{color:"white"}} src={img0} alt=''></img></button>
        {show?
        <div className='noti'>
            <p className='share'>S H A R E</p>
            <img className='sv' src={img1} alt=''></img>
            <img className='sv' src={img2} alt=''></img>
            <img className='sv' src={img3} alt=''></img>
            </div>:null}
    </div>
  </div>
  </div>
</div>

</>
  );
}

export default Card;
