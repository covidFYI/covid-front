<template>
  <div class="contact">
    <h1 class="heading">
    Facing any problems with the platform? Let us know!
    </h1>
    <router-link  to="/partner">Looking to partner with us? Click here.</router-link>
    <div class="kwes-form">
    <form method="POST" action="https://kwes.io/api/foreign/forms/jofKkskII5ow1upSICAx">
        <div><input type="text" name="name" rules="required|max:255" placeholder = "What's your name?"></div>
        <div><input name="contact-detail" placeholder="How to contact you?"></div>
        <div><textarea name="message" placeholder="Type your message here..."></textarea></div>
        <button type="submit">Submit</button>
    </form>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "Contact",
  created(){
    let kwesScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://kwes.io/js/kwes.js')
    document.head.appendChild(kwes)
  }
};
</script>

<style scoped>
.contact{
    padding: 80px 50px 80px 50px;
    text-align: left;
    background: var(--dark-background-color);
}
.heading{
    font-size: 24px;
    color: var(--light-text-color);

}
input{
    width:70vw;
    height: 40px;
    margin:20px;
    margin-left:0;
    margin-bottom: 0;
    padding:15px;
    font-size:1rem;
    font-family: objektiv-mk3;
    border-radius: 8px;
    
    box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.5);
    color: #353535;
}
textarea{
    width:70vw;
    height:120px;
    font-family: objektiv-mk3;
    padding:15px;
    font-size:1rem;
    margin: 20px;
    margin-left:0;
    margin-bottom: 0;
    border-radius: 8px;
    
    box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.5);
    color: #353535;
}

button{
    margin: 20px;
    color: #353535;
    margin-left:0;
    margin-bottom: 0;
    font-family: objektiv-mk3;
    border:3px solid #353535;
    background:#fff;
    border-radius: 8px;
    box-shadow: none;
    font-weight: bold;
    height:40px;
    width:100px;
    font-size:1rem;
}
a{
    text-decoration: none;
    color: var(--primary-color);
}
@media screen and (max-width:500px){
    .contact{
        padding:40px 25px 40px 25px;
    }
    input{
        width:80vw;
        height:30px;
        padding:10px;
        font-size:.8rem;
    }
    textarea{
        width:80vw;
        height:90px;
        padding:10px;
        font-size:.8rem;
    }
    .heading{
        font-size: 18px;
    }
    button{
        font-size: .8rem;
    }
}
</style>