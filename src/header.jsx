import React from 'react';
import {Link} from "react-router-dom"
import Mahindra from "./image/mahindra.jpg";

export default function Header(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"> <img src={Mahindra} alt="" width="100"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">User Form <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/redux">Redux</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/week1">week 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/week2">week 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/week3">week 3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/toggle">Toggle</a>
      </li>
      
    </ul>
   
  </div>
</nav>
        </div>
    )
}