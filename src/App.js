import React from 'react';
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import styled from 'styled-components'
import Post from './component/Post'
import Publish from './component/Publish'

const Nav=styled.div`
margin-left:2em;
padding-left:3em;
`;

const Navs=styled.div`
flex:0.5;
`;

function App(){
  return (
    <Navs>
      <BrowserRouter>
      
        <Nav >
         
            <button> <Link to='/post' >New Post  </Link></button>
           
              <button><Link to='/publish' >   Published</Link></button>
              
        </Nav>
        
        <Switch>
          <Route path='/post' component={Post} exact={true}/>
          <Route path='/publish' component={Publish} exact={true}/>
        </Switch>
      </BrowserRouter>
    </Navs>
  );
}

export default App;
