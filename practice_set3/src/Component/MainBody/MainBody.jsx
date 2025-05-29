import bodyImg from '../assests/images/vehicle_tracking.svg'
import bodyImg2 from '../assests/images/traffic_update.svg'
import './MainBody.css'

export default function MainBody() {
  return (
    <>
      <div className='mainbody'>
          <div>
              <img src={bodyImg} alt="" style={{width:'50vw', height:'35vh'}}/>
          </div>
          <div className='bodycontent1'>
              <h2 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>Live Tracking</h2>
              <p>Honoured customer can view any type of vehicle movement online in real time.Which is a great improvement over the auto refreash map.Customer can also see the actual travel path instead of a straight line with Sultan VTS.</p>
          </div>
      </div>
      <div className='mainbody2'>
        <div className='bodycontent2'>
              <h2 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>Live Traffic</h2>
              <p>In traffic areas choosing best route can save waste of time. Sultan VTS shows traffic update in its associated map by color variation. Red shows mostly crowded whereas blue shows least crowded.</p>
          </div>
          <div>
              <img src={bodyImg2} alt="" style={{width:'50vw', height:'35vh'}}/>
          </div>
      </div>
      <div className='mainbody3'>
        <div>
              <img src={bodyImg2} alt="" style={{width:'50vw', height:'35vh'}}/>
          </div>
        <div className='bodycontent3'>
              <h2 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>Live Tracking</h2>
              <p>Honoured customer can view any type of vehicle movement online in real time.Which is a great improvement over the auto refreash map.Customer can also see the actual travel path instead of a straight line with Sultan VTS.</p>
          </div>
          
      </div>
      
    </>
  )
}
