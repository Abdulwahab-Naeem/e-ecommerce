import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Faqs from './faqs';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer , NotificationManager} from 'react-notifications';


function App() {
  let a=['abdulwahab','naeem','malik','alam'];
  let showNotification=()=>{
    NotificationManager.info('Abdulwahab Naeem')
    // NotificationManager.success('Success message', 'Title here');
  }
  let[pstatus,setPstatus]=useState(false);
  let[modalStatus,setModalStatus]=useState(false);
  let[menuStatus,setMenuStatus]=useState(false);
 
  return (
    <div className="App">
     <NotificationContainer/>
      <Faqs/>
      {a.map((v,i)=>{
return(
  <li key={i}>{v}</li>
)
        })}
<ul>
  <li></li>
</ul>
     
     
      <div className={`modalOverlay  ${modalStatus ? 'modalShow' :''}`}></div>
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
      <div>
        {/* <h1>Frequently Asked Questions(FAQS)</h1> */}
      </div>
      {/* <div className='faqouter'></div> */}
{/*      
      <div className='faqItems'>
        <h3>Popular Activities</h3>
        <p>Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamless
          ly combine components written by independent people, teams, and organizations.</p>

      </div>
     
      <div className='faqItems'>
        <h3>Popular Activities</h3>
        <p>Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamless
          ly combine components written by independent people, teams, and organizations.</p>

      </div>
      <div className='faqItems'>
        <h3>Popular Activities</h3>
        <p>Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamless
          ly combine components written by independent people, teams, and organizations.</p>

      </div> */}
     
      </div>
      
      
      
    
     <div className={`menu ${menuStatus ?'activeMenu' :''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Gallery</li>
        <li>Contact us</li>
      </ul>
     </div>
     
  
        <h1>Show or Hide Password</h1>
        <buttton className="micon" onClick={()=>setMenuStatus(!menuStatus)}>
          {
          menuStatus ?
          <span>&times;</span>
          :
          <span>&#9776;</span>  
        }
        </buttton>
        <button className='en' onClick={()=>setModalStatus(!modalStatus)}>Enquire Now!</button>
        <input type={pstatus ? 'text' :'password'}/>
        <button onClick={()=>setPstatus(!pstatus)}>
          {pstatus ? 'hide' :'show'}
          </button>
      <button onClick={showNotification}>Save</button>
            </div>
            
            
  );
}

export default App;
