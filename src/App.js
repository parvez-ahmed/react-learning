
import { useEffect } from 'react'
import Auth from './component/auth/index';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './component/layout/index';
import { connect } from 'react-redux';
import { setUser } from './services/redux/action/auth';
import { firebaseAuth } from './services/firebase';
// import Demo from './component/demo/index';

function App(props) {
  console.log("App props ", props);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("user in auth state changed", user);
      props.setUser(user);
    })
  }, [])
  return (
    <div className="App">
      {props.user != 'LOADING' ?
        <Switch>
          <Route path="/auth">
            {!props.user ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {!props.user ? <Redirect to="/auth/signin" /> : <Layout />}
          </Route>
        </Switch>
        :
        <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h1>Loading....</h1>
        </div>
      }
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch(setUser(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
