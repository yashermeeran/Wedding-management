""

//=======================props folder example===============================//
// import './App.css';
// import Demo from './Demo';
// import Example from './Example';
// import Classfiles from './props/Classfiles';
// import Parentspropsexp from './props/Parentspropsexp';


// function App() {
//   return (
//     <div className="App">
//      <Demo/>
//      <Example/>
//      <Parentspropsexp/>
//      <Classfiles/>
//     </div>
//   );
// }

// export default App;

//============================= state folder example ===========================//
// import React from 'react'
// import Stateexpfile from './State/Stateexpfile'
// import Statedatachange from './State/Statedatachange'

// export default function App() {
//   return (
//     <div>
//       <Stateexpfile/>
//       <Statedatachange/>

//     </div>
//   )
// }
// *****************************map key props************************//
// import React from 'react'
// import Mapfunction from './Mapkeyprop/Mapfunction'
// import Mapclass from './Mapkeyprop/Mapclass'

// export default function App() {
//   return (
//     <div>
//       <Mapfunction name="yaser" age="25" email="anu123@gmail.com" language={["c","c++","js"]}/>
//       <Mapclass name="yaser" age={24} email="yaser0304@gmail.com" language={["Tamil","English","Maths"]}/>
//     </div>
//   )
// }

//*************************Event concepts*********************//

// import React from 'react'
// import Onclickeventclass from './EventHandling/Onclickeventclass'
// import Onclickeventfunction from './EventHandling/Onclickeventfunction'

// export default function App() {
//   return (
//     <div>
//       <Onclickeventclass/>
//       <Onclickeventfunction/>
//     </div>
//   )
// }
//**************************Onclickevent example*******************//
// import React from 'react'
// import Onclickclassexp from './Onclickexp/Onclickclassexp'
// import Onclickfunctionexp from './Onclickexp/Onclickfunctionexp'

// export default function App() {
//   return (
//     <div>
//       <Onclickclassexp/>
//       <Onclickfunctionexp/>
//     </div>
//   )
// }
//****************************Onsumit***************************//
// import React from 'react'
// import Onsubmit from './EventHandling/Onsubmit'
// import Onkeydownevent from './EventHandling/Onkeydownevent'
// import Onsubmitclass from './EventHandling/Onsubmitclass'
// import Onkeydowneventcls from './EventHandling/Onkeydowneventcls'
// import Onfocusandonblurevent from './EventHandling/Onfocusandonblurevent'

// export default function App() {
//   return (
//     <div>
//       <Onsubmit/>
//       <Onkeydownevent/>
//       <Onsubmitclass/>
//       <Onkeydowneventcls/>
//       <Onfocusandonblurevent/>
//     </div>
//   )
// }
//**********************Otherevent****************//
// import React from 'react'
// import Otherevent from './EventHandling/Otherevent'

// import Onresetevent from './EventHandling/Onresetevent'
// import Onkeydownevent from './EventHandling/Onkeydownevent'

// export default function App() {
//   return (
//     <div>
//       <Otherevent/>
//       <Onresetevent/>
//       <Onkeydownevent/>
//     </div>
//   )
// }
//**********************************Event handling********************* //
// import React from 'react'
// // import Arguementpassing from './EventHandling/Arguementpassing'
// // import Lifecyclestructure from './Lifecyclestructure/Lifecyclestructure'
// import Lifecycleexample from './Lifecyclestructure/Lifecycleexample'
// import Lifecycleexampletwo from './Lifecyclestructure/Lifecycleexampletwo'
// export default function App() {
//   return (
//     <div>
//       {/* <Arguementpassing/>
//       <Lifecyclestructure/> 
//       <Lifecycleexample/> */}
//       {/* <Lifecycleexampletwo/> */}
    
    
//     </div>
//   )
// }
// *******************Navibars**********************//
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navibars from './Rountingconcept/Navibars'
// import Home from './Rountingconcept/Home'
// import About from './Rountingconcept/About'
// import Contact from './Rountingconcept/Contact'
// import Service from './Rountingconcept/Service'
// export default function App() {
//   return (
//     <div>
//       <Navibars />
     
//         <Routes>
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<About/>} />
//           <Route path="contact" element={<Contact/>} />
//           <Route path="service" element={<Service/>} />
//         </Routes>
//         <p>
//         src\App.js
//   Line 150:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

// webpack compiled with 1 warning
//         </p>
    
//     <img src="images/1.jpg" />
//     </div>
//   )
// }
// *****************************Event management*************************//
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Eventmanagement/Home'
import About from './Eventmanagement/About'
import Contact from './Eventmanagement/Contact'
import Service from './Eventmanagement/Service'
import Decoration from './Eventmanagement/Decoration'
import Navbar from './components/navbar'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
           <Route path="" element={<Home />} />
           <Route path="about" element={<About/>} />
           <Route path="contact" element={<Contact/>} />
           <Route path="service" element={<Service/>} />
           <Route path="Decoration" element={<Decoration/>} />
      </Routes>
    </div>
  )
}

