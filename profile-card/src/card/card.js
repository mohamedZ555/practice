import './card.scss';
import img3 from './img3.jpg'; 
import backgroundVideo from '../video2.mp4'
function Card() {
  return (
    <>
    <div className='map'>
          <div className="video-background">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      </div>
    <div className='card'>
      <div className='card-header'>
        <img className='img' src={img3} alt='Profile' />
        <div className='texts'>
        <p className='head'>Mohamed Ashraf</p>
        <p className='mail'>mohamed.ashraf@gmail.com</p>
        </div>
      </div>
      <div className='card-body'>
        <p className='job'>Interface Designer</p>
        <p className='des'>An Interface Designer crafts user-friendly, visually appealing layouts for digital products to enhance usability and engagement.</p>
      </div>
    </div>
    </>
  );
}

export default Card;
