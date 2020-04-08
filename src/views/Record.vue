<template>
    <div class="record page" :class="{left: loaded}">
      <img src="../assets/logo.svg" v-show="!loaded" id="logo">

      
        <div class = "content" v-if="loaded" >

        <div class = "breadcrumb">
          <router-link to="/">Home</router-link> >
          <router-link  :to="{name: 'State', query:{type: currentType } }">State</router-link>
          <span> > {{mapLabels(currentType)}} </span>
        </div>
         <div class="info-grid">
        
            <EntryCard 
            v-for="entry in entries" 
            v-bind:key="entry.id"
            v-bind:data="entry"
            v-bind:state="state"
            >  
            </EntryCard>
           </div>
        </div>  
     
      
    </div>
</template>

<script>

import axios from 'axios';
import EntryCard from '@/components/EntryCard.vue';

export default {
  name: "Record",
  data: function(){
    return{
      state: this.$route.params.state,
      //URL: 'http://127.0.0.1:8000/api/v1/covidfyi/',
      URL: 'https://covid-fyi-backend-2.herokuapp.com/api/v1/covidfyi/',
      loaded: false,
      data: []
    }
  },
  components: {
    EntryCard
  },
  computed: {
    currentType(){
      return this.$route.query.type?this.$route.query.type: 'Helpline';
    },
    entries(){
      if(this.loaded){
        let l = [];
        for(let i = 0; i < this.data.length; i++){
          
          for(let j = 0; j < this.data[i].entries.length; j++){     
            let type = this.data[i].entries[j].infotype;
            if(type === this.currentType){
              let entry = this.data[i].entries[j];
              entry.district = this.data[i].district
              l.push(entry);
            }  
          } 
        }
        
        return l;
      }
      return [];
    }
       
    
  },
  created(){
    
    this.scrollToTop();
    
    axios.get(`${this.URL}states/${this.state}/`)
    .then(resp => {
    
      this.data = resp.data;
      this.loaded = true;
      
    })
  },
  methods: {
    scrollToTop: function(){
      window.scrollTo(0,0);
    },
    mapLabels: function(type){
      const mappings = {
        'Doctor':'Doctors',
        'Helpline': 'Helpline Numbers',
        'Laboratory - Private':'Labs - Pvt',
        'Laboratory - Government': 'Labs - Govt',
        'Government': 'Government Officers'
      }
      return (mappings[type] ? mappings[type] : type);
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
  .record{
    background-color: var(--dark-background-color);
    padding: 80px 50px 80px 50px;
    color: white;
    
  }
  .left{
    text-align: left;
  }


  .breadcrumb{
    font-size: 30px;
    color: var(--light-text-color);
    font-weight: 800;
    text-align: left;    
  }
  .info-grid{
    margin-top:50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 4rem;
    justify-items:center;
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
  @media screen and (max-width: 600px){
  .record{
    padding: 20px 12.5px 20px 12.5px;
  }
  
  .breadcrumb{
    font-size:18px;
  }
  .info-grid{
    
    margin-top:17px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:.8rem;
    text-align: center;
  }
  
}
@media screen and (max-width:400px){
  .info-grid{
    grid-gap:.6rem;
  }
}
  
</style>
