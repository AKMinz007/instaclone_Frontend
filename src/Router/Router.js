import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from '../../src/Component/LandingPage/LandingPage';
import NewPost from '../Component/PostView/NewPost/NewPost'
import PostView from '../Component/PostView/AllPost/PostView';



export default function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/NewPost" element={<NewPost/>}/>
            <Route path="/PostView" element={<PostView/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}