<template>
  <main>
    <div class="content" >
        <p class = "heading" v-if="data.name" >{{data.name}}</p>
        <p class = "heading" v-else>{{state}}</p>
        <div class = "secondary-text">
          <p class = "speciality" v-show="type='Doctor'">{{data.dr_name}}</p>
          <p class = "district" >{{data.district}}</p>
<!--           <a class = "source-link" :href="data.source_link" target="_blank" v-show="data.source_link_valid">Source Link</a> -->
          <p class="source-link" v-show="true">{{data.source}}</p>
        </div>
        <div class = "contact-details">
            <a v-bind:href="'tel:'+data.phone_1" v-if="data.phone_1" class = "phone">{{data.phone_1}}</a>      
        </div>
      
        <div class="contact-ctas">
          <a v-bind:href="'mailto:' + data.email_id_1 " v-if="data.email_id_1">  <button class="contact-cta"> <i class="fa fa-lg fa-envelope"></i> Email </button></a>
          <a v-bind:href="'tel:' + data.phone_1 " v-if="data.phone_1">  <button class="contact-cta"> <i class="fa fa-1x fa-phone-alt"></i> Call </button></a>
        </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "EntryCard",
  props: ['data', 'state', 'type']
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
    font-size: 22px;
    font-weight: 800;
    color: var(--light-text-color);
  }  

.speciality{
  color: var(--primary-color);
  font-weight: 700;
}
i{
    margin-right:10px;
  }

.secondary-text{
  margin-top: 10px;
  font-size: 16px;
}
  .district{
    color: var(--dark-text-color);
    margin-top: 6px;
  }
.source-link{
  
  margin-top:6px;
}
  .contact-details{
      margin-top:8px;
      font-size: 18px;
      word-wrap: break-word;
  }
  
  
    .phone{
        color: var(--primary-color);
        font-size: 20px;
        margin-top: 5px;
        font-weight: 800;
        text-decoration: none;
    }

.contact-cta {
    cursor: pointer;
  background: var(--light-background-color) !important;
    border: 0;
    height: 40px;
    width: 120px;
    border-radius: 50px;
    color: #ffffff;
    line-height: 20px;
    font-size: 14px;
    transition: all 0.5s ease;
    margin: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    font-family: inherit;
}

.contact-cta:hover {
  transition: all 0.5s ease;
  background: #e82f5c !important;
}

.contact-ctas{
  margin-top:20px;
}

    @media screen and (max-width:600px){
    .heading{
      font-size: 14px;
    }
    
  
    .contact-ctas{
      display:none;
    }
    .phone{
      font-size: 14px;
      margin-top: 3px;
    }
    
    main{
      height: 200px;
      width: 160px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: 4px;
      padding:8px;
    }
    
    .secondary-text{
      margin-top:4px;
      font-size: 12px;
    }
    .district{
      margin-top:2px;
    }
    .source-link{
      margin-top:2px;
    }
    .contact-details{
      margin-top:4px;
    }
    
  }
  @media screen and (max-width:360px){
    main{
      height: 200px;
      width: 140px;
       
    }
  }
</style>
