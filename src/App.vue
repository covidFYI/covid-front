<template>
  
  <div id="app">
  <vue-headful 
    title="COVID-FYI"
    description="A one stop platform for all COVID information"  
  />
    <nav>
      <router-link class = "hero" tag = "div" to="/">
        <img src="./assets/logo.svg" id="logo">
        <div class="hero-text">
          <h1 class = "name">Covid <span id="fyi">FYI</span></h1>
          <p class="tagline">One stop for all<br>COVID-19 information.</p>
        </div>      
      </router-link>
      <div class="helplines-lg">
        <div id="national">
          <div class = "helpline-head">National Helpline Number</div>
          <a href ="tel:+911123978046" class = "helpline-num">+91-11-23978046</a>
        </div>
      </div>
    </nav>
    <div class="helplines-sm">
        <div id="national">
          <div class = "helpline-head">National Helpline Number</div>
          <a href ="tel:+911123978046" class = "helpline-num">+91-11-23978046</a>
        </div>
    </div>
    <router-view/>
    
    <footer>
      <div class = "menu"> 
        <a href="">About Us</a>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/partner">Partner</router-link>
      </div> 
      <div class="liscence">
        
      </div>
      <div class="footer-sm">
        <div class="footer-hero">
          <img src="./assets/logo.svg" id="footer-logo">
        <div class="hero-text">
          <h1 class = "footer-name">Covid <span id="fyi">FYI</span></h1>
        </div>
      </div>
      <div class="footer-sm-menu">
        <router-link to="/partner">Partner</router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/contact" >Contact</router-link>
      </div>
      </div>
    </footer>
  </div>
</template>


<style>
:root{
  --primary-color: #E82F5C;
  --dark-text-color: #C8C8C8;
  --light-text-color: #DDD;
  --dark-background-color: #1C1C1C;
  --light-background-color: #202020;
  --background-gradient: linear-gradient(136.07deg, #353535 0%, #282828 83%, #222 100%);
  --background-inverse-gradient: linear-gradient(136.07deg, #222 0%, #282828 83%, #353535 100%);
}
  @import url("https://use.typekit.net/oqt2ong.css");
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: objektiv-mk3, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height:100vh;
  background: var(--light-background-color);
  display: flex;
  flex-direction: column;
}
.home, .state, .NotFound, .partner, .contact{
  flex:10;
} 
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-background-color);
  padding: 30px 20px 30px 20px;
  flex: 2;
}
.footer-sm{
  display: none;
  flex: 1;
}
#logo{
  height: 100px;
  width: 100px;
}
.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.name{
  color: var(--primary-color);
  font-size: 36px;
  font-weight: 800;
}
.hero-text{
  text-align: left;
  margin-left: 10px;
}
.tagline{
  color: var(--light-text-color);
}
#fyi{
  color: var(--light-text-color);
}
.helpline-head{
  font-size: 24px;
  color: var(--light-text-color);
  font-weight: 800;
}
.helpline-num{
  font-size: 22px;
  text-decoration: none;
  color: var(--primary-color);
}
.menu{
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 24px;
  font-weight: 800;
}
a{
  color: var(--light-text-color);
}

footer{
  background: var(--light-background-color);
  padding: 60px;
  flex: 1;
}

.liscence{
  text-align: left;
  color: var(--light-text-color);
  padding-top:30px;
  font-size: 20px;
}
.helplines-sm{
  display:none;
}
.footer-hero{
  display: flex;
  align-items:center;
  justify-content: center;
}
#footer-logo{
  height:36px;
  width:36px;
}
.footer-name{
  font-size:24px;
  color: var(--primary-color);
}

.footer-sm-menu{
  font-size: 16px;
  margin-top:5px;
}

@media screen and (max-width:600px){
  .helplines-lg{
    display: none;
  }
  .helplines-sm{
    display:block;
    background: var(--dark-background-color);
    padding-top:25px;
  }
  .helpline-head{
    font-size: 20px;
  }
  .helpline-num{
    font-size: 18px;
  }
  .name{
    font-size: 28px;
  }
  .tagline{
    font-size: 12px;
  }
  #logo{
    height: 80px;
    width: 80px;
  }
  nav{
    padding:20px;
    justify-content: center;
  }
  .menu{
    display:none;
  }
  .liscence{
    display:none;
  }
  .footer-sm{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  footer{
    padding:30px;
  }

  
}

</style>

