import bodyImg from '../assests/images/image4.png'
import './MainBody.css'

export default function MainBody() {
  return (
    <div className='mainbody'>
        <div>
            <img src={bodyImg} alt="" style={{width:'50vw', height:'35vh'}}/>
        </div>
        <div className='bodycontent1'>
            <h2 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>Live Tracking</h2>
            <p>Honoured customer can view any type of vehicle movement online in real time.Which is a great improvement over the auto refreash map.Customer can also see the actual travel path instead of a straight line with Sultan VTS.</p>
        </div>
    </div>
  )
}
