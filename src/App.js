import React, {Fragment, useState} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SafeArea from './Components/SafeArea/SafeArea';
import './App.css';
import Dropback from './Components/UI/dropback/dropback';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/Others/Site Information/terms/Pages/About us';
import Donate from './Pages/Others/Site Information/terms/Pages/Donate';
import Terms from './Pages/Others/Site Information/terms/Pages/Terms';

import CourseOverview from './Pages/Courses/iOS/Course Overview/Pages/CourseOverview';
import IosAnimationCourse from './Pages/Courses/iOS/iOS Animation/Pages/iOSAnimationCourse';
import IosAnimationResourceVideos from './Pages/Courses/iOS/iOS Animation/Pages/iOSAnimationResourceVideos';

import SwiftReference from './Pages/Reference/iOS/Swift/Pages/SwiftReference';
import VarLetName from './Pages/Reference/iOS/Swift/Pages/VarLetName';
import Playground from './Pages/Reference/iOS/Swift/Pages/Playground';
import Comments from './Pages/Reference/iOS/Swift/Pages/Comments';
import Arithmetic from './Pages/Reference/iOS/Swift/Pages/ArithmeticOperations';

function App() {
  let [clickState, setClickState] = useState(0)

  const menuClicked = () => {
    if (clickState === 1){
      setClickState(0)
    } else {
      setClickState(1)
    }
  }

  return (
    <Fragment>
      <SafeArea>
        <BrowserRouter>
          <Navbar menuClicked = {menuClicked}/>
          {(clickState === 1) ?<Dropback dropbackClicked = {menuClicked} size = {1}/> : null}
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/aboutus" exact component = {() => (<AboutUs state = {clickState}/>)}/>
            <Route path = "/donate" exact component = {() => (<Donate state = {clickState}/>)}/>
            <Route path = "/terms" exact component = {() => (<Terms state = {clickState}/>)}/>
            
            <Route path = "/course" exact component = {() => (<CourseOverview state = {clickState}/>)}/>
            <Route path = "/course/iOSAnimation" exact component = {() => (<IosAnimationCourse state = {clickState}/>)}/>
            <Route path = "/course/iOSAnimation/resource&video" exact component = {() => (<IosAnimationResourceVideos state = {clickState}/>)}/>

            <Route path = "/reference/swift" exact component = {() => (<SwiftReference state = {clickState}/>)}/>
            <Route path = "/reference/swift/varlet" exact component = {() => (<VarLetName state = {clickState}/>)}/>
            <Route path = "/reference/swift/playground" exact component = {() => (<Playground state = {clickState}/>)}/>
            <Route path = "/reference/swift/comments" exact component = {() => (<Comments state = {clickState}/>)}/>
            <Route path = "/reference/swift/arithemtic" exact component = {() => (<Arithmetic state = {clickState}/>)}/>

          </Switch>
        </BrowserRouter>
      </SafeArea>
    </Fragment>
  );
}

export default App;
