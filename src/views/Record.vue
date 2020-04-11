<template>
    <div class="record page" :class="{left: loaded}">
      
      <img src="../assets/logo.svg" v-show="!loaded" id="loader">
        <div class = "content" v-if="loaded" >
        <div class = "breadcrumb-rec">
          <router-link to="/">Home</router-link> >
          <router-link  :to="{name: 'State', query:{type: currentType } }">State</router-link>
          <span> > {{mapLabels(currentType)}} </span>
        </div>
        <div v-show="currentType=='Doctor'" class="select-drop">
          <!-- <select v-model="selected">
            <option value="all">All Specialities</option>
            <option v-for="(spec,i) in specs" :value="spec" :key="i">{{spec}}</option>
          </select> -->
          <v-select  :options="specs" :clearable="false" v-model="selected"></v-select>
        </div>
         <div class="rec-grid">
        
            <EntryCard 
            v-for="entry in filteredEntries" 
            v-bind:key="entry.id"
            v-bind:data="entry"
            v-bind:state="state"
            v-bind:type="currentType"
            >  
            </EntryCard>
           </div>
        </div>  
     
      
    </div>
</template>

<script>

import axios from 'axios';
import EntryCard from '@/components/EntryCard.vue';
/* import 'vue-select/dist/vue-select.css'; */

export default {
  name: "Record",
  data: function(){
    return{
      state: this.$route.params.state,
      //URL: 'http://127.0.0.1:8000/api/v1/covidfyi/',
      URL: 'https://covid-fyi-backend-2.herokuapp.com/api/v1/covidfyi/',
      loaded: false,
      data: [],
      selected:'all'
    }
  },
  components: {
    EntryCard
  },
  computed: {
    currentType: function(){
      return this.$route.query.type?this.$route.query.type: 'Helpline';
    },
    entries: function(){
      if(this.loaded){
        let l = [];
        for(let i = 0; i < this.data.length; i++){
          
          for(let j = 0; j < this.data[i].entries.length; j++){     
            let t = this.data[i].entries[j].infotype;
            if(t === this.currentType){
              let entry = this.data[i].entries[j];
              entry.district = this.data[i].district
              l.push(entry);
            }  
          } 
        }
        
        return l;
      }
      return [];
    },
    specs: function(){
      let specsArr = [];
      for(let i = 0; i < this.entries.length; i++){
        if(this.entries[i].dr_name!=='')
          specsArr.push(this.entries[i].dr_name);
      }
      return ['all', ...Array.from(new Set(specsArr))];
    },
    filteredEntries: function(){
      return this.selected==='all'?this.entries: this.entries.filter(el => el.dr_name===this.selected);
    }
       
    
  },
  created(){
    let faScript = document.createElement('script')
    faScript.setAttribute('src', 'https://kit.fontawesome.com/525c03e75b.js')
    document.head.appendChild(faScript)
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
        'Doctor':'Dial a Doctor',
        'Helpline': 'Helpline Numbers',
        'Laboratory': 'Testing Facilities',
        'Government': 'Reach Task-Force',
        'Hospitals': 'Find Hospitals Nearby'
      }
      return (mappings[type] ? mappings[type] : type);
    }
  }
};
</script>

<style >
  
  @import 'https://unpkg.com/vue-select@latest/dist/vue-select.css';

  #loader{
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

  .v-select .vs__search::placeholder,
  .v-select .vs__dropdown-toggle,
  .v-select .vs__dropdown-menu {
    background: var(--light-text-color);
    border: none;
    font-size: 1.2rem;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .v-select .vs__clear,
  .v-select .vs__open-indicator {
    fill: var(--light-background-color);
  }
  
  
  .select-drop{
    margin-top: 20px;
    width: 85vw;
  }
  .breadcrumb-rec{
    font-size: 30px;
    color: var(--light-text-color);
    font-weight: 800;
    text-align: left;    
  }
  
  .rec-grid{
    margin-top:30px;
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
  
  .breadcrumb-rec{
    font-size:18px;
  }
  .rec-grid{
    
    margin-top:17px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:.8rem;
    text-align: center;
  }
  
}
@media screen and (max-width:400px){
  .rec-grid{
    grid-gap:.6rem;
  }
}
  
</style>
