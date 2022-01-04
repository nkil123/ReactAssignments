import {useContext, useState} from 'react';
import './App.css';
// import {Navbar} from './Components/Navbar';
// import {Body} from './Components/Body';
import MenuAppBar from './Components/Appbar';
import CustomizedDialogs from './Components/Form';
import Login from './Components/Login';
import {AuthContext} from './contexts/AuthContext';

function App () {
  const [modal, setModal] = useState (true);
  const {isAuth, setIsAuth, token} = useContext (AuthContext);
  console.log (isAuth);
  // console.log (isAuth, 'from app');
  const giveForm = () => {
    console.log ('from app', modal);
    setModal (!modal);
  };
  return (
    <div className="App">
      {/* <Navbar />
      <Body /> */}
      <MenuAppBar giveForm={giveForm} />
      {isAuth
        ? null
        : <CustomizedDialogs>
            <Login giveForm={giveForm} />

          </CustomizedDialogs>}

      {isAuth ? <h1>{`Token is:  ${token}`}</h1> : null}

    </div>
  );
}

export default App;
