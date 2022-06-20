import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import LinkForm from './components/link-form/LinkForm';
import Rank from './components/ranking/Rank';
import React, { useState } from 'react';
import FaceRecognition from './components/FaceRecognition';


function App() {

  let [input, setInput] = useState('');
  let [imageUrl, setImageUrl] = useState('');


  function onChangeHandler(e){
    setInput(e.target.value);
    
  }

  function onSubmit(){
    setImageUrl(input);
    //console.log(imageUrl);
   
    const raw = JSON.stringify({
      user_app_id : {
        user_id: "b8j91wnrp03s",
        app_id: "72a7142cee434e9a9a6f98db5ff1bd82"
      },
      inputs: [
        {
          data: {
            image: {
              url: input
            },
          },
        },
      ],
    });
 
    fetch(
       "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs",
       {
         method: "POST",
         headers: {
           Accept: "application/json",
           Authorization: "1e45ba3664b64452a5020a44253e3175",
         },
         body: raw,
       }
     )
     .then((response) => response.text())
     .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
     .catch((error) => console.log("error", error));
  

  }

  return (
    <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <LinkForm onChangeHandler={onChangeHandler} onSubmit={ onSubmit }/>
        <FaceRecognition imageUrl={imageUrl}/>
        
    </div>
  );
}

export default App;
