<template>
  <router-link tag="main" :to="{ name: 'State', query : { type : name} }">
    <div class="content">
        
        <p class = "name">{{mapLabels(name)}}</p>
        <p class="description">{{getDesc(name)}}</p>
      
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
    mapLabels: function(type){
      const mappings = {
        'Doctor':'Doctors',
        'Helpline': 'Helpline Numbers',
        'Laboratory - Private':'Labs - Pvt',
        'Laboratory - Government': 'Labs - Govt',
        'Government': 'Government Officers'
      }
      return (mappings[type] ? mappings[type] : type);
    },
    getDesc: function(type){
      const mappings = {
        'Doctor':'Doctors are available on call',
        'Helpline': 'Helpline numbers for several states',
        'Laboratory - Private':'Private laboratories conducting COVID-19 testing',
        'Laboratory - Government': 'Government laboratories conducting COVID-19 testing',
        'Government': 'Government officers throughout the nation'
      }
      return (mappings[type] ? mappings[type] : '');
    }
    
  }
};
</script>


<style scoped>

  .type-icon{
    width:50px;
    height:50px;
  }  
  main{
    color: var(--light-text-color);
    height: 235px;
    width: 340px;
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
    font-size: 24px;
    color: var(--light-text-color);
  }  

  .description{
    font-size: 18px;
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
    .description{
      font-size:12px;
    }
  }
  @media screen and (max-width:350px){
    .name{
      font-size: 13px;
    }
    main{
      height: 120px;
      width: 145px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: 4px;
    }
    .description{
      font-size:10px;
    }
  }
  
</style>
