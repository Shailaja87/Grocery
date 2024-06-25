import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carosuel';
import Grid from '../Components/Grid';
export default function Home(){
    return( 
        <>
        <div><Navbar/></div>
        <div><Carousel/></div>
        <div><Grid/></div>
        <div><Footer/></div>
         </>
        


    );
}