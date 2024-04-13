import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Parent from './component/Parent';
import Main from './component/Main';
import Contact from './component/Contact';
import Details from './component/Details';

const conatcts=[{
  name:"anirban",
  description:"Anirban is an instructor"
},{
  name:"usha",
  description:"usha is a student"
},
{
  name:"stephen",
  description:"stephen is a student"
}]

let getSingleName=({params})=>{
  let name=params.name
  return conatcts.find((nm)=>nm.name==name)

}

let getAllNames=()=>{

  let names=[]
  conatcts.forEach((nm)=>{
    names.push(nm.name)
  })

  return names
}

const routes=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    errorElement: (<div>Error (Not found)</div>),
    children:[
      {
        path:'/home',
        element:(<div>In Home Page</div>)
      },
      {
        path:'/aboutus',
        element:(<div>In aboutus Page</div>)
      },
      {
        path:'/contactus',
        element:<Contact/>,
        loader:getAllNames,
        children:[
          {
            path:"details/:name",
            loader:getSingleName,
            element:<Details/>
          }
        ]
      }
    ]
  }
  
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={routes}/>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
