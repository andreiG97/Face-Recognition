import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import LinkForm from './components/link-form/LinkForm';
import Rank from './components/ranking/Rank';
import React, { useState } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Page404 from './components/Page404';
import Register from './components/Register/Register';
import { Routes, Route } from "react-router-dom";




function App() {

  let [input, setInput] = useState('');
  let [imageUrl, setImageUrl] = useState('');
  let [box, setBox] = useState({});

  const USER_ID = 'andreippa97';
  const PAT = 'f57ba082a2454498b51e3e82215effbb';
  const APP_ID = 'face-recognition';
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = 'fe995da8cb73490f8556416ecf25cea3';


  

  function calculateFaceLocation(data){
    
     const clarifaiFace = JSON.parse(data, null, 2).outputs[0].data.regions[0]
      .region_info.bounding_box;
     const image = document.getElementById("inputImage");
     const width = Number(image.width);
     const height = Number(image.height);
    console.log("1", clarifaiFace);
     return {
       leftCol: clarifaiFace.left_col * width,
       topRow: clarifaiFace.top_row * height,
       rightCol: width - clarifaiFace.right_col * width,
       bottomRow: height - clarifaiFace.bottom_row * height,
     };

  }

  function displayFaceBox(wrap){
    let updatedValue = {};
    updatedValue = wrap;
    setBox({
         ...updatedValue
       });
  }

  function onChangeHandler(e){
    setInput(e.target.value);
    
  }


  function onSubmit(){
    setImageUrl(input);
   console.log(box); 
   
   const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": input
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};


fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then((response) => response.text())
    .then((result) => displayFaceBox(calculateFaceLocation(result)))
    .catch(error => console.log('error', error));
    
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>       
            <Logo/>
            <SignIn/>
          </>
      }/>
      <Route path='/FaceRecognition' element={
          <>
             <Navigation/>          
             <Logo/>
             <Rank/>
             <LinkForm onChangeHandler={onChangeHandler} onSubmit={ onSubmit }/>
             <FaceRecognition box={box} imageUrl={imageUrl}/>
          </>
       } 
      />
      <Route path='/Register' element={
        <>
          <Logo/>
          <Register/>
        </>
      }/>
        <Route path='*' element={<Page404/>}/>
      </Routes>  
    </div>
  );
}

export default App;
