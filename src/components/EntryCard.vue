<template>
  <main>
    <div class="content">
        <p class = "heading">{{data.name}}</p>
        <p class = "district" >{{data.district}}</p>
        <div class = "contact-details">
            <p><a v-bind:href="'mailto:' + data.email_id_1 " v-if="data.email_id_1" class = "email">email</a></p>
            <p>
            <a v-bind:href="'tel:'+data.phone_1" v-if="data.phone_1" class = "phone">{{data.phone_1}}</a>
            </p>
            <a class = "source-link" :href="data.source_link" target="_blank" >Source Link</a>
        </div>
        <div class="contact-icons">
          <a v-bind:href="'mailto:' + data.email_id_1 " v-if="data.email_id_1"><img src="../assets/email.svg" class="icon"></a>
          <a v-bind:href="'tel:' + data.phone_1 " v-if="data.email_id_1"><img src="../assets/call.svg" class="icon"></a>
        </div>
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
  .icon{
    height:50px;
    width:50px;
    margin:20px
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
.source-link{
  font-size:12px;
  margin-top:6px;
}
  .contact-details{
      margin-top:8px;
      font-size: 18px;
      word-wrap: break-word;
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

    .contact-icons{
      margin-top:20px;
    }

    @media screen and (max-width:600px){
    .heading{
      font-size: 14px;
    }
    .district{
      font-size: 12px;
    }
    .email{
      font-size: 14px;
    }
    .contact-icons{
      display:none;
    }
    .phone{
      font-size: 14px;
    }
    .source-link{
      font-size:12px;
    }
    main{
      height: 200px;
      width: 160px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: 4px;
      padding:8px;
    }
  }
  @media screen and (max-width:360px){
    main{
      height: 200px;
      width: 140px;
       
    }
  }
</style>
