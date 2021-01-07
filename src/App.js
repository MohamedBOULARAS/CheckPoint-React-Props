import './App.css';
import React from 'react';
import PropTypes from "prop-types";
import ProfileComponent from './Profile/ProfileComponent';


function App(props) {
  const { fullName } = props
  const handleName = e => {
    e.preventDefault();
    alert("My Profile: Mohamed BOULARAS")
  };

  ProfileComponent.PropTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
  };

  ProfileComponent.defaultProps = {
    fullName: "My Name",
    bio: "My Bio",
    profession: "My Profession",
  };

  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', justifySelf:'center',width:"100%", height:"100vh", backgroundColor:"#5faaa8"}}>
      <ProfileComponent fullName={ 'Mohamed BOULARAS' } bio={ "Responsable commercial depuis quelques années, je m’intéresse au monde del’entreprenariat, j’ai trouver cette intérêt depuis ma première expériencedans le monde professionnel Dans mon quotidien, mes moteurs sont les rencontreset la découverte de nouveaux univers auxquels je peux donner vie à travers mes créations." } profession={ 'Directeur commercial'} handleName={ handleName }>
        <img src={'./Images/Photodeprofile.jpg'} style={{hight: "50px", width: "90px", borderRadius:"50%",  transform: "rotate(90deg)", paddingTop: "10px"}} alt="Photo de profile"/>
      </ProfileComponent>
    </div>
  );
}

export default App;
