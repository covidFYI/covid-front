<template>
  <div class="state page">
    <div class = "breadcrumb">
    <router-link to="/">Home</router-link> 
    <span> > State </span>
    </div>
    <div class = "heading">By State or Union Territory</div>
    
    <input type="text" v-model.trim="stateQuery" placeholder="Enter State or Union Territory name">
    <div class="info-grid">
      <StateCard
        v-for="(state, index) in displayStates"
        v-bind:state="state"
        v-bind:type="currentType"
        v-bind:key="index"
      >
      </StateCard>
    </div>
    <div v-show="showHelperText" class="helper-text"><h3>{{helperText}}</h3>
    </div>

  </div>
</template>

<script>

import axios from 'axios';
import StateCard from "@/components/StateCard.vue"

export default {
  name: "State",
  data: function(){
    return{
      states: [],
      //URL: 'http://127.0.0.1:8000/api/v1/covidfyi/',
      URL: 'https://covid-fyi-backend-2.herokuapp.com/',
      stateQuery: ''
    }
  },
  components: {
    StateCard
  },
  computed: {
    currentType: function(){
      return this.$route.query.type?this.$route.query.type: 'Helpline';
    },
    displayStates: function(){
      return this.stateQuery===''?this.states:this.states.filter(item => {
              return item.toLowerCase().includes(this.stateQuery.toLowerCase());
          })
    },
    showHelperText: function(){
      return (this.currentType==='Doctor' || this.currentType==='Government' || this.displayStates.length < 8);
    },
    helperText: function(){
      if(this.currentType==='Doctor') return 'Doctors are on-call. Feel free to contact doctors from any states. Please stay tuned, we\'re adding more doctors from different regions by the day'
    
      else if(this.displayStates.length < 8) return 'Our team is working hard to add more data!'
      
    }
  },
  mounted(){
    
    let data = null;
    if(!localStorage.getItem('states')){
      console.log('making req')
      axios.get(`${this.URL}info_types/`)
      .then(resp => {
        data = resp.data;
        localStorage.setItem('states', JSON.stringify(data));
      })
    }else{
      data = JSON.parse(localStorage.getItem('states'))
    }
    this.states = data.filter(el => el.info_type.name === this.currentType)
    
    this.states = this.states[0]['states'];
    
    this.scrollToTop();
  },
  methods: {
    scrollToTop: function(){
      window.scrollTo(0,0);
    },
    
  }
};
</script>

<style scoped>
  .state{
    background-color: var(--dark-background-color);
    padding: 80px 50px 80px 50px;
    scroll-behavior: smooth;
  }
  .heading{
    color: var(--light-text-color);
    font-size: 32px;
    text-align: left;
    font-weight: 800;
    margin-bottom:40px;
    margin-top: 20px;
  }
  .info-grid{
    margin-top:50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    justify-items:center;
  }
  
  input{
    height:60px;
    width: 100%;
    border-radius: 10px;
    background-color: #C8C8C8;
    box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5);
    color: #353535;
    font-size: 28px;
    font-family: objektiv-mk3;
    padding:20px;
    transition: 0.3s;
  }

  .helper-text{
    text-align: left;
    margin-top:25px;
    font-size:1.6rem;
  }

  input:active{
    background-color: #ddd;
  }
  input:focus{
    background-color: #ddd;
  }
  .breadcrumb{
    font-size: 30px;
    color: var(--light-text-color);
    font-weight: 800;
    text-align: left;    
  }

  h3{
    color: var(--light-text-color);
  }
@media screen and (max-width: 600px){
  .state{
    padding: 20px 12.5px 20px 12.5px;
  }
  .heading{
    font-size:22px;
    margin-bottom:14px;
    margin-top:8px;
  }
  .breadcrumb{
    font-size:18px;
  }
  .info-grid{
    
    margin-top:10px;
    
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    text-align: center;
  }
  input{
    height:35px;
    border-radius:4px;
    font-size:16px;
    padding:9px;
    box-shadow: inset 0 .4px 1.2px 0 rgba(0,0,0,0.5);
    margin-bottom:10px;
    width:100%;
    
  }
  .helper-text{
    font-size:1rem;
  }
}
@media screen and (max-width: 400px){

  .info-grid{
    grid-gap:.7rem;
  }
}

</style>
