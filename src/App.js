import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const username = '';
  const password = '';
  const getIpAddress = async () =>{
    try{
      const { data:response } = await axios.get(`https://ifconfig.me`);
      console.log(response2);

      const maxMindApi = `https://geoip.maxmind.com/geoip/v2.1/insights/${response2}`;
      const headers = {
        'Authorization': 'Basic ' + btoa(`${username}:${password}`).toString('base64'),
        'Content-Type': 'application/vnd.maxmind.com-country+json; charset=UTF-8; version=2.1',
        'Accept-Encoding': 'gzip, deflate'
      };

      const { data:response2 } = await axios.get(maxMindApi, {
        headers,
        responseType: 'json', 
      });

      console.log('Final Data', response2);

      console.log("Response", response);

    } catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getIpAddress()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
