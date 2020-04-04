<template>
  <router-link tag="main" :to="{ name: 'State', query : { type : name} }">
    <div class="content">
      
        <p :class = "{name: true, active:active}">{{name}}</p>
        
      
    </div>
  
  </router-link>
</template>


<script>
export default {
  name: "InfoTypeCard",
  props: ['name'],
  data: function(){
    return {
      active: false
    }
  },
  methods: {
    
    
  }
};
</script>


<style scoped>

  .active{
    color: var(--primary-color);
  }
  main{
    color: var(--light-text-color);
    height: 250px;
    width: 360px;
    background: var(--background-gradient);
    border-radius: 8px;
    display: flex;
    transition: .3s;
  }

  main:hover{
    border: 3px solid var(--primary-color);
    cursor: pointer;
    
  }
  main:active{
    border: 3px solid var(--primary-color);
  }
  .content{
    margin: auto;
  }
  
  .name{
    font-size: 25px;
    color: var(--light-text-color);
  }  

  .description{
    font-size: 20px;
    color: var(--dark-text-color);
  }
  a{
    text-decoration: none;
  }
  
  
</style>
