import React  from "react";
import { Helmet } from "react-helmet";
import '../Components/nav.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

let x = 10;
let y = 20;

let g = x + y;


const DataViewer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/tab/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Data Viewer</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.message}</li>
                ))}
            </ul>
        </div>
    );
};




class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>My ASSASSIN</title>
                  <link rel="shortcut icon" href="https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png" />
              </Helmet>
              ...
          </div>
      );
    }
  };
function View(){
    return(
        <div id='panel'>
            <h3>{g}</h3>
            <h3 style={{color:'yellow'}}> {text} </h3>
            <h1>test</h1>
            <div id="img"></div>
            <div style={{color:'bule'}}><Gamer /></div>
            <div style={{color:'red'}}><Add /></div>
            <Application />
            <Table />
        </div>
    );
}
const Add = () => {
    return(
        <h2>test22</h2>
    );
}
const Gamer = () => {
    return(
        <div style={{color : 'green'}}> sdsadad asdsadadtest sdsdsds dsadasdadas dsadadasdasd asdsadasdsadsad dasdsad a</div>
    ); 
}
Gamer();
const Table = () => {
    return(
        <div>
            <p>Updates to your homepage feed
We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
        </div>
    );
}
export default View;