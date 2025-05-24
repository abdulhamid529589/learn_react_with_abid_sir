import homeimg from '../assests/topsvg.svg'
import './Home.css'

export default function Home() {
  return (
    <div className='container'>
        <div className='title'>
            <h1 className='content cnt1'>Best Vehicle tracking service in Bangladesh</h1>
            <p className='content cnt2'>For Individual And Corporate</p>
            <button className='btn'>About Us</button>
            <button className='btn'>Apply for Dealership</button>
        </div>
        
        <div>
            <img src={homeimg} alt="" className='bgimg'/>
        </div>
        
        
    </div>
  )
}
