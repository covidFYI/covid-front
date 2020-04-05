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

  
  main{
    color: var(--light-text-color);
    height: 250px;
    width: 360px;
    background: var(--background-gradient);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
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

  @media screen and (max-width:600px){
    .name{
      font-size: 16px;
    }
    main{
      height: 120px;
      width: 160px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: 4px;
    }
  }
  
  
</style>
