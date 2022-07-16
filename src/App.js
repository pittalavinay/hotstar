import React from 'react'
import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
<div>
<nav class="head">
<div class="di"><ul class="ullist"><li>Diseny+hotstar</li>
<li class="tv">Tv
<ul class="drop">
  <li>hero</li>
  <li>vinay</li>
  <li>king</li>
  </ul></li>
<li id="li">Movies</li>
<li id="sp">Sports</li>
<li id="ds">Diseny+</li>
<li class="kids"><b>KIDS</b></li></ul>
<input type="text" placeholder="Search" class="search"></input>
<button type="button" className="button">UPGRADE</button></div>
</nav>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://pbs.twimg.com/profile_images/1513422368357912577/6FgmBymm_400x400.jpg" alt="Los Angeles" class="d-block w-100" height="400px" width="400px"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/KMFRCwJVEHY/maxresdefault.jpg" alt="Chicago" class="d-block w-100" height="400px" width="400px"/>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/photo/msid-90725677/90725677.jpg" alt="New York" class="d-block w-100" height="400px" width="400px"/>
    </div>
  </div>

 
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<div class="extra"></div>
<div class="continue"><b id="b">Continue Watching</b></div>
<div >
  <div>
    <ul class="ca">
  <li><img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/342/1160342-h-5e4a9f1d25ec" class="im"></img></li>
  <li><img src="https://crazymovieupdates.com/wp-content/uploads/2022/03/Ravi-Teja-Khiladi-OTT-Release-Date-1.jpg" class="ima"></img></li>
  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAoDikReLhY-X6dbGBeP4bpZKEgZP9J5f0A&usqp=CAU" class="imag"></img></li>
  <li><img src="https://images-na.ssl-images-amazon.com/images/I/81HAqpUxaPL._RI_.jpg" class="image"></img></li>
   </ul>
   </div>
 </div>
</div>
  )
}

export default App