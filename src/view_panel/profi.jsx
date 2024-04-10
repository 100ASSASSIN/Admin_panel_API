import React from "react";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';

function Profi() {
    const [cookies, setCookies, removeCookies] = useCookies(); // Add setCookies
  
    const handleLogout = () => {
      // Iterate over each cookie and remove it
      for (const cookie in cookies) {
        removeCookies(cookie);
      }
      // Update cookies state to an empty object
      setCookies({});
      // Reload the page after deleting cookies
      window.location.replace("/")
    };
    return (<div>
          <button id='but' onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>{/* Add logout button */}
         
    </div>
      );
    }

export default Profi;