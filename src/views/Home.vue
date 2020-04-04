<template>
  <div class="home">
    <div class = "heading">What may we help you find today?</div>
    
      <transition-group  tag = "div" class = "info-grid" name="fade">
      <InfoTypeCard
        v-for="(type, index) in infotypes"
        v-bind:name="type"
        v-bind:key="index"
      >
      </InfoTypeCard>
      </transition-group>
    
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
      URL: 'http://127.0.0.1:8000/api/v1/covidfyi/'
    }
  },
  components: {
    InfoTypeCard
  },
  created(){
    if(!JSON.parse(localStorage.getItem('visited'))){
      axios.get(`${this.URL}info_types/`)
      .then(resp => {
        localStorage.setItem('states', JSON.stringify(resp.data));        
        localStorage.setItem('visited', 'true');
        this.infotypes = resp.data.map(el => el.info_type);
      })
    }else{
      const data = JSON.parse(localStorage.getItem('states'));
      this.infotypes = data.map(el => el.info_type);
    }
    this.scrollToTop();
  },
  methods: {
    scrollToTop: function(){
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
  .home{
    background-color: var(--dark-background-color);
    padding: 80px 50px 80px 50px;
  }
  .heading{
    color: var(--light-text-color);
    font-size: 32px;
    text-align: left;
    font-weight: 900;
    margin-bottom:50px;
  }
  .info-grid{
    margin-top:50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
  opacity:1;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>