<template>
  <main>
    <div class="content">
        <p class = "heading">{{data.name}}</p>
        <p class = "district" >{{data.district}}</p>
        <p class = "contact-details">
            <p><a v-bind:href="'mailto:' + data.email_id_1 " v-if="data.email_id_1" class = "email">{{data.email_id_1}}</a></p>
            <p>
            <a v-bind:href="'tel:'+data.phone_1" v-if="data.phone_1" class = "phone">{{data.phone_1}}</a>
            </p>
        </p>
    </div>
  </main>
</template>


<script>
export default {
  name: "EntryCard",
  props: ['data'],
  data: function(){
    return {
      
    }
  },
  methods: {
    
    
  }
};
</script>


<style scoped>
  
  main{
    color: var(--light-text-color);
    height: 380px;
    width: 300px;
    background: var(--background-gradient);
    border-radius: 8px;
    display: flex;
    padding: 15px;
    transition: .2s;
    word-wrap:break-word;   
    justify-content: center;
    align-items: center;
    text-align: center;
    
  }

  

  .heading{
    font-size: 25px;
    font-weight: 800;
    color: var(--light-text-color);
  }  

  .district{
    color: var(--dark-text-color);
    margin-top: 8px;
  }

  .contact-details{
      margin-top:15px;
      font-size: 18px;
      
  }
  
    .email{
        color: var(--primary-color);
        font-size: 20px;
        text-decoration: none;
        font-weight: 800;
    }          
    .phone{
        color: var(--primary-color);
        font-size: 20px;
        margin-top: 5px;
        font-weight: 800;
        text-decoration: none;
    }

    @media screen and (max-width:600px){
    .heading{
      font-size: 16px;
    }
    .district{
      font-size: 12px;
    }
    .email{
      font-size: 10px;
    }
    .phone{
      font-size: 12px;
    }
    main{
      height: 200px;
      width: 140px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: 4px;
      padding:8px;
    }
  }
</style>
