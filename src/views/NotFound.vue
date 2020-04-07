<template>
  <div class="NotFound page">
    <h1>404,</h1>
    <h1>Nothing to see here.</h1>
    <router-link class = "home-link" tag = "div" to="/">
      <h3>Click here to go to our Home Page.</h3>
    </router-link>
  </div>
  
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped>
  .NotFound{
    background-color: var(--dark-background-color);
    padding: 80px 50px 80px 50px;
  }
  h1{
    color: var(--light-text-color);
    font-size: 44px;
  }
  h3{
    margin-top: 20px;
    color: var(--primary-color);
    font-size: 36px;
  }
  @media screen and (max-width: 500px){
    h1{
      font-size: 30px;
    }
    h3{
      font-size: 18px;
    }
  }
</style>