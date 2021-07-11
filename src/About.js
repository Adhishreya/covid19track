import React from 'react';
import Symptoms from './Symptoms'
import Precautions from './Precautions';
function About (){

return (
<div style={{background:"black"}}>
 

 <h2 className="text">COVID-19</h2>
 <br/>
<br/>
 <h3>


 <div>
<img style={{marginLeft:"2%"}}src="https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"/>

 </div>
<article >Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</article>
      <iframe  style={{width:"60%",height:"80vh",marginLeft:"10%"}}src="https://www.youtube.com/embed/OZcRD9fV7jo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h3>

<h1>Symptoms</h1>
<hr/>
<Symptoms/>
<h1>Myths</h1>
<hr/>

<br/>
<article className="container">

     
      
              <div class="cards"><p>
        <h4>Do vaccines against pneumonia protect you against the new coronavirus?
</h4>No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus.
        </p></div>
           <div class="cards"><p>
        <h4>Does the new coronavirus affect older people, or are younger people also susceptible?</h4>
       People of all ages can be infected by the new coronavirus (2019-nCoV). Older people, and people with pre-existing medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming severely ill with the virus. 
        </p></div>
        <div class="cards"><p>
        <h4>Are antibiotics effective in preventing or treating COVID-19</h4>
        No. Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19
        </p></div>
           <div class="cards"><p>
        <h4>Exposing yourself to the sun or to temperatures higher than 25C degrees DOES NOT prevent the coronavirus disease</h4>
     You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather have reported cases of COVID-19. To protect yourself, make sure you clean your hands frequently and thoroughly and avoid touching your eyes, mouth, and nose.  
        </p></div>
                <div class="cards"><p>
        <h4>The new coronavirus CANNOT be transmitted through mosquito bites.</h4>
     To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose.  
        </p></div>
              <div class="cards"><p>
        <h4>Are hand dryers effective in killing the new coronavirus?.</h4>
   No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.
</p>
</div>
    </article>

</div>
    
)
}

export default About;