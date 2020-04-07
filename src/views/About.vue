<template>
  <div class="about page">
      <h1>About us</h1>
      <p class="secondary-text">
          We are a group of like minded individuals trying to make information about help on COVID19 crisis in India more accessible.
      </p>
      <h3>Why we built CovidFYI?</h3> 
          <p class="secondary-text">
              Critical information about COVID-19 crisis management in India is hard to find when needed, is scattered over multiple websites, exists in many forms, and is hard to understand for most people.
              The scale of this information is such, that new circulars are released every single day at multiple levels of government - National (MOHFW), State (Departments), District (Taluka level) about whom to reach out to, where to go, which helplines to call, emergency contact information, labs, hospitals etc.
              Having access to real-time, credible information at one place - did not exist, until <strong>CovidFYI</strong> came to the rescue!
          </p>

      <h3>Our aim: </h3>
          <p class="secondary-text">
              Empower every Indian with the rightful help needed at the right time, all with a click of a button. <br>
              Empower the government and healthcare sector to focus on more important things like solving this pandemic while we take up the role of preventing chaos and misinformation.
          </p>
      <h1>Meet the team</h1>
      <div class="team-grid">
          <div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div>
          <div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div><div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div><div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div><div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div><div class = "card">
              <div class="img-circle"></div>
              <div class="name">Member Name</div>
              <a href="#">LinkedIn</a>
              <div class="details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ea harum. Fugit ad laboriosam est nesciunt odio in quo, deleniti iure illo cum tenetur, error veniam numquam distinctio sequi ipsam.
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "partner",
  
};
</script>

<style scoped>
.about{
    padding: 80px 50px 80px 50px;
    text-align: left;
    background: var(--dark-background-color);
    color: var(--light-text-color);
}
h1 {
    font-size: 28px;
    color: var(--primary-color);
}
h3{
    font-size: 22px;
    color: var(--dark-text-color);
    
}

.secondary-text{
    font-size: 18px;
    color: var(--light-text-color);
    margin-bottom: 30px;
}
a{
    text-decoration: none;
    color: var(--primary-color);
}
strong{
    color: var(--primary-color);
}

.team-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    gap: 3rem;
    justify-items:center;
    margin-top: 20px;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    background: linear-gradient(136.07deg, #353535 0%, #282828 83%, #222 100%);
}

.img-circle{
    border-radius: 50%;
    background: var(--primary-color);
    width: 200px;
    height:200px;
}
.name{
    font-size: 22px;
}
.details{
    font-size: 18px;
    margin-top: 10px;
}
@media screen and (max-width: 450px){
    .about{
        padding: 30px 20px 30px 20px;
    }
    h1 {
    font-size: 24px;
    color: var(--primary-color);
    }
    h3{
        font-size: 18px;
        color: var(--dark-text-color);
        
    }
    .secondary-text{
        font-size: 16px;
        color: var(--light-text-color);
        margin-bottom: 14px;
    }
    .card{
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    }

    .img-circle{
        
        width: 150px;
        height:150px;
    }
    .name{
        font-size: 18px;
    }
    .details{
        font-size: 16px;
    }
    .team-grid{
        gap: 2rem;
        margin-top: 12px;
    }
}
</style>