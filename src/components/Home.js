
import'../Style/Home.css'
import { useNavigate } from 'react-router-dom';


const Home=()=>{
    const naviga=useNavigate()

    function navigate(){
naviga('/login')

    }

    return(

        <>
        <h1 id='title'>PAY AND STAY</h1>
         <img id="wall" src="https://cdn.mos.cms.futurecdn.net/Fi3uewrZNjvhif6sDc3ecg.jpg"/> 
<button id='g' onClick={navigate}>GUEST</button>
<button id='w'>OWNER</button>
        
        
        
        </>
    )
}
export default Home;