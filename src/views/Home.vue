<template>
  <div class="home page">
    <img src="../assets/logo.svg" v-show="!loaded" id="logo">
    
    
    <div class = "heading" v-show="loaded">What are you looking for today?</div>
      <div class = "info-grid">
        <InfoTypeCard
          v-for="(type, index) in infotypes"
          v-bind:name="type.name"
          v-bind:description="type.description"
          v-bind:icon="type.icon_name"
          v-bind:key="index"
        >
        </InfoTypeCard>
      </div>
    
  </div>
  
</template>

<script>

import axios from 'axios';
import InfoTypeCard from "@/components/InfoTypeCard.vue";

export default {
  name: "Home",
  data: function(){
    return{
      infotypes: [],
      respData: [],
      URL: 'https://covid-fyi-backend-2.herokuapp.com/api/v1/covidfyi/',
      updateDurationMinutes: 1,
      loaded:false
    }
  },
  components: {
    InfoTypeCard
  },
  created(){
    let faScript = document.createElement('script')
    faScript.setAttribute('src', 'https://kit.fontawesome.com/525c03e75b.js')
    document.head.appendChild(faScript)
    if(!JSON.parse(localStorage.getItem('visited')) || this.timeLimitExpired()){
      axios.get(`${this.URL}info_types/`)
      .then(resp => {
      
        localStorage.setItem('states', JSON.stringify(resp.data));        
        localStorage.setItem('visited', 'true');
      
        const now = new Date();
        localStorage.setItem('lastUpdated', JSON.stringify(now))
        
        this.infotypes = resp.data.filter(el => el.info_type.active).map(el => el.info_type);
      
      }).catch(err => {
      
        alert(err)
      
      })
    }else{
      
      const data = JSON.parse(localStorage.getItem('states'));
      this.infotypes = data.filter(el => el.info_type.active).map(el => el.info_type);
    
    }
    
    this.loaded = true;
    this.scrollToTop();
  
  },
  methods: {
    
    scrollToTop: function(){
      window.scrollTo(0,0);
    },

    timeLimitExpired: function(){
      if(JSON.parse(localStorage.getItem('lastUpdated'))){
        const lastUpdated = new Date(JSON.parse(localStorage.getItem('lastUpdated')));
        const now = new Date();
         
        let diff = Math.round(((now-lastUpdated))/1000)/60;
        return (diff > this.updateDurationMinutes); 
        
      }else{
        return true;
      }
    }
  }
};
</script>

<style scoped>
#logo{
    height:200px;
    width: 200px;
    margin:auto;
    animation: pulse 2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
  }
  @keyframes pulse {
    0%{
      opacity:1;
      
    }50%{
      opacity:0.3;
      transform: rotate(360deg);
      
    }100%{
      opacity:1;
      transform: rotate(0deg);
    }
  }
  .home{
    background-color: var(--dark-background-color);
    padding: 80px 50px 80px 50px;
  }
  .heading{
    color: var(--light-text-color);
    font-size: 30px;
    text-align: left;
    font-weight: 800;
    margin-bottom:50px;
  }
  .info-grid{
    margin-top:50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 4rem;
    justify-items:center;
  }
  

@media screen and (max-width: 600px){
  .home{
    padding: 20px 12.5px 20px 12.5px;
  }
  .heading{
    font-size:24px;
    margin-bottom:14px;
  }
  .info-grid{
    margin-top:10px;
    
    grid-template-columns: 1fr 1fr;
    grid-gap:1rem;
    text-align: center;
  }
  
}
@media screen and (max-width:400px){
  .info-grid{
    grid-gap: 0.7rem;
  }
}
</style>