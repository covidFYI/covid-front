<template>
  <router-link tag = "main" :to="{ name: 'Record', params : { state : state}, query: { type:type } }">
    
    <div class="content">
        
        <div class="name">{{state}}</div>
        
    </div>
    </router-link>
  
</template>


<script>
export default {
  name: "StateCard",
  props: ['state', 'type'],
};
</script>


<style scoped>

  main{
    color: var(--light-text-color);
    height: 140px;
    width: 340px;
    background: var(--background-gradient);
    border-radius: 8px;
    display: flex;
  }
  .content{
    margin: auto;
  }
  .name{
    font-size: 25px;
    color: var(--light-text-color);
  }  
  main:hover{
    border: 3px solid var(--primary-color);
    cursor: pointer;  
  }
  main:active{
    border: 3px solid var(--primary-color);
  }
  a{
    text-decoration: none;
  }
  
</style>
