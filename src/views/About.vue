<template>
  <div class="about page">
      
      <h1>About us</h1>
      
          <p class="secondary-text">  
          John F. Kennedy once said, “When written in Chinese, the word ‘crisis’ is composed of two characters. One represents danger and the other represents opportunity.”
          </p>
<p class="secondary-text">
When our beloved nation was struck by the crisis, not only did we realise the danger that COVID 19 posed to the common man, but we collectively realised the opportunity to come together behind closed doors to address critical issues that the pandemic has brought about.
</p>

<h3>Why we spent a sleepless week to build CovidFYI.in?</h3>
<p class="secondary-text">
With every government administration body issuing regulations, circulars, important information at central, state, district and taluka level, India is facing an "Information Overload". It was the need of the hour to have a single solution platform that would double up as the "Go-To" website having consolidated information about Hospitals, Doctors, Government services, Helpline number and other vital information.
</p>
<h3>Why we strive so hard and what is our Aim?</h3>
<p class="secondary-text">
We at <strong>CovidFYI</strong> believe in "Spoon Feeding" easy to understand and find the information very quickly in the need of the hour.

Our focus is at empowering the common man to access information at a click of a button.

The team is driven by the core belief that Government, Healthsector's resources are to be spent on overcoming the pandemic while we battle against misinformation and fake news.
</p>
      <h1>Meet the team</h1>
      <div class="team-grid">
          <div class = "card" v-for="(member,i) in team" :key="i">
              <img class="img-circle" :src="member.img">
              <div class="name">{{member.name}}</div>
              <a :href="member.link" target = "_blank">LinkedIn</a>
              <div class="details">
                  {{member.details}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "about",
  data: function(){
      return {
          team: [
              {
                  name: 'Simran Soni',
                  img: 'https://i.postimg.cc/43wYF5x3/e1022211-c248-414f-af10-d36352762c5a.png',
                  link:'https://www.linkedin.com/in/simransoni/',
                  details: 'Ex Analyst at M&A Consulting - EY | KPMG, MBA - IIM Kozhikode'
              },{
                  name: 'Naresh Priyadarshi',
                  img: 'https://i.postimg.cc/MKHb5Dyp/0.jpg',
                  link:'https://in.linkedin.com/in/nareshdevpriyadarshi',
                  details: 'Mentor; Innovator, Start-up expert, Accelerator, Strategist, Coach;  Continuous learner; CEO; Alumnus of IIM-A, SSCBS.'
              },{
                  name: 'Sujit Joshi',
                  img: 'https://i.postimg.cc/3NnFpJ9x/c225db69-03b7-4da7-a56f-d12792f4b65b.png',
                  link:'https://www.linkedin.com/in/sujitjoshi00/',
                  details: 'Service designer, UX designer, User Researcher. MDes Designed Objects, School of the Art Institute of Chicago'
              },{
                  name: 'Eklavya Dahiya',
                  img: 'https://i.postimg.cc/bwjRZr6X/4175828e-caaf-4652-8b4a-7ffc6c84b2b7.png',
                  link:'https://www.linkedin.com/in/eklavyadahiya/',
                  details: 'Self taught full stack developer and pro-bono lawyer. Addicted to problem solving.'
              },{
                  name: 'Akarsh Jalan',
                  img: 'https://i.postimg.cc/rst7LCGR/0be0d4ea-653b-4a7f-a84f-c93b68477813.png',
                  link:'https://www.linkedin.com/in/akarsh-jalan-80177473/',
                  details: 'Entrepreneur and an Ex Investment banker. Previously worked with Citi Bank and EY'
              },{
                  name: 'Tejas Arlimatti',
                  img: 'https://i.postimg.cc/jqpSnMF9/bdb36320-4863-4e0d-88a8-024e4286a12f.png',
                  link:'https://www.linkedin.com/in/tejas-arlimatti/',
                  details: 'Backend engineer. Scaling my apps and myself up.'
              },{
                  name: 'Manan Gouhari',
                  img: 'https://i.postimg.cc/KckYY6JB/6fc7aee4-3a90-42fb-a592-4b17826d432b.png',
                  link:'https://www.linkedin.com/in/manan-gouhari-202b9b1a3',
                  details: 'All things software dev. Always looking to solve problems with code.'
              },{
                  name: 'Rohit Nair',
                  img: 'https://i.postimg.cc/2y1LWZmS/efc9048c-4e93-4b31-a5c2-824f4c639418.png',
                  link:'https://www.linkedin.com/in/rohitnairtech/',
                  details: 'Full Stack & ML engineer. Founder @aibuddha.in'
              },
              {
                  name: 'Zeeshan Fatmi',
                  img: 'https://www.tracks2travel.com/wp-content/uploads/2020/04/download.png',
                  link:'https://www.linkedin.com/in/mdzeeshanfatmi/',
                  details: 'Fighting Fake News | Data & Operations Lead - COVIDFYI | Digital Marketing | SEO | Railfan | AvGeek'
              },{
                  name: 'G Rohit',
                  img: 'https://i.postimg.cc/v84PxCV8/gr-logo-white.png',
                  link:'https://www.linkedin.com/in/g-rohit/',
                  details: 'UI/UX developer | Web enthusiast | Tech geek'
              },{
                  name: 'Yogesh Bhatt',
                  img: 'https://i.postimg.cc/CxGBbYyk/427261e7-ce6b-4948-87f5-058972e2351f.png',
                  link:'https://www.linkedin.com/in/yogesh-bhatt',
                  details: 'B.Tech CSE student at Graphic Era University'
              },{
                  name: 'Samarth Goel',
                  img: 'https://i.postimg.cc/t42z5g1Z/8f6e67d5-0226-4c11-a48e-e3f61e11b390.png',
                  link:'https://www.linkedin.com/in/goelsamarth998/',
                  details: 'Marketing and Management - Double Major (University of Auckland)'
              },{
                  name: 'Shanika Goel',
                  img: 'https://i.postimg.cc/43yQFTt8/88e5d39d-baf9-477a-9263-0b0b862592b5.png',
                  link:'https://www.linkedin.com/in/shanika-goel-058875124',
                  details: 'Lawyer in the making, Symbiosis law school.'
              },{
                  name: 'Dolly Bhatia',
                  img: 'https://i.postimg.cc/BvzcrwBJ/fbc5ae4a-4350-4eba-b174-d58530302832.png',
                  link:'#',
                  details: 'MBA in HR (Sinhgad business school-Pune) Former HR Executive at Motherson Global Wiring Ltd.  Housewife'
              },{
                  name: 'Saathwik Nune',
                  img: 'https://i.postimg.cc/RZ5J3hYv/7397bf11-56ce-48df-bafb-4489a17014a1.png',
                  link:'https://www.linkedin.com/in/saathwik/',
                  details: 'A Data Scientist and a Visual Designer with M.Sc in Data Science and corporate experience at Eli Lilly Intl. currently pursuing MBA from IIM Kozhikode.'
              },{
                  name: 'Tanmay Mundra',
                  img: 'https://i.postimg.cc/9Xk7hJtR/c561c20a-b0ce-4904-b908-21d7388dfe84.png',
                  link:'https://www.linkedin.com/in/tanmay-mundra/',
                  details: 'Looking for oppurtunities to make the world a better place'
              },{
                  name: 'Abhishek Hiresave',
                  img: 'https://i.postimg.cc/sxbQ4gD9/63a70a28-e075-4777-939a-aad061a4cf1d.png ',
                  link:'https://www.linkedin.com/in/abhishekhv/',
                  details: 'Master Student | RWTH Aachen | Borderless Engineering'
              },{
                  name: 'Dr. Vishesh',
                  img: 'https://i.postimg.cc/KYmKNVFV/30961bce-1953-4c45-9b7a-6e2c0aca873a.png',
                  link:'http://linkedin.com/in/vishesh-agrawal-10b405175',
                  details: 'MBBS graduate (BJGMC, Pune). Former medical intern, Sassoon general hospitals.'
              },{
                  name: 'Utkarsh',
                  img: 'https://i.postimg.cc/ZRQXgDNh/b807af29-3d6c-4ce8-a6aa-a304c326cce3.png',
                  link:'https://www.linkedin.com/in/utkarsh-gupta-01',
                  details: 'I am currently pursuing MBA from IIM Kozhikode. I have worked in Panasonic in the field of Electric Vehicles and IOT.'
              },{
                  name: 'Prateek Katiyar',
                  img: 'https://i.postimg.cc/8k9bYfyW/353080e8-7417-43da-906d-297ccf1f722e.png',
                  link:'https://www.linkedin.com/in/prateek-katiyar-aa0ba373',
                  details: 'MBA, Indian Institute of Management, Kozhikode'
              },{
                  name: 'Avinash Sivan',
                  img: 'https://i.postimg.cc/7YTTY0mB/13fd7bbe-65ac-41ff-85b7-40798b2ca8ce.png',
                  link:'http://linkedin.com/in/avinash-sivan-459168ab',
                  details: 'A No-nonsense simple UX Designer who loves to craft minimalistic designs. The minimal a design, the maximum an impact'
              }
          ]
      }
  },
  mounted(){
      window.scrollTo(0,0);
  }
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
    gap: 3.5rem;
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
    min-width: 285px;
    background: linear-gradient(136.07deg, #353535 0%, #282828 83%, #222 100%);
}

.img-circle{
    border-radius: 50%;
    border: 2.7px solid var(--primary-color);
    width: 200px;
    height:200px;
    margin-top: 20px;
    margin-bottom: 20px;

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