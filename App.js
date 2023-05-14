import logo from './logo.svg';
import './App.css';
import { AuthProvider } from 'react-auth-kit'

function App() {
  return (
    <div className="App">     
        <div className='test'>
         <h1 style={{marginBottom: "13%", marginTop: "13%",  }}>LOGO</h1>
         <form>
            <div className="Pack">
              <label for="fname" className='Subtitle'>Email</label><br></br>
              <input type="text" className='Input' id='fname'></input><br></br>
            </div>
            <div className='Pack'>
              <label for="fname" className='Subtitle'>Password</label><br></br>
              <input type="text" className='Input' id='fname'></input><br></br>
            </div>
            
            <input type='submit' value="Submit" className='Input' style={{border: 0, backgroundColor:'#6DA8FF',fontfamily: 'serif',fontstyle: 'Regular', fontsize: '24px'}}></input>
         </form>
         <p style={{color:'#2B2B2B', fontSize:'20px'}}>By clicking sign up, you agree to our Terms of Service and Privacy Policy</p>   
        </div>      
    </div>
  );
}

export default App;
