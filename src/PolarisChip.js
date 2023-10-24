import { LitElement, html, css } from 'lit';
import "@ojakanbi/date-chip/src/date-chip.js";



export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  

  constructor() {
    super();
    this.title = 'University reminds employees of flu, COVID-19 vaccines, resources and policies';
  }


  static get styles() {
    return css`

    :host{
        display: inline-block;
        
        
    }

    .cards {
    margin-top: 10px;
    margin-left: 20px;
    max-height: 564px;
    max-width: 423px;
    justify-content: center;
  

   
    }

    .card-container {
    background-color: white;
    height: 564px;
    width: 423px;
    
  }

  .bHover{
    cursor: pointer;
    background: #005fa9;
    margin: none;
    border: none;
    height: 90%;
    width: 100%;
  }
  

  .cards img{
    max-width:100%;
    max-height: 100%;
    display: block;  //This was the key to remove the thin margin at the bottom
  
  }

  .cards img:hover{
    opacity: .7;
    border: none;
    
  }

  #article-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

  .classTitle {
    color: #005fa9;
    font-size: 20.8px;
    font-weight: 400;
    font-family: 'roboto', sans-serif;
    text-rendering: optimizeSpeed;
    text-transform: capitalize;
    display: inline;
    box-sizing: border-box;
    line-height: 1em;
    text-decoration-skip-ink: auto;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    text-decoration: none;
  }

  .classTitle:visited{
    color: #005fa9;
  }

  .classTitle:hover,
  .classTitle:active,
  .classTitle:focus{
    color: #1E407C;
  }

  .post-date {
    box-sizing: border-box;
    color: #000000;
    display: block;
    float: left;
    font-family: 'roboto', sans-serif;
    line-height: 24px;
    margin-right: 10px;
    text-align: center;
    text-rendering: optimizeSpeed;
    text-size-adjust: 100%;
  }

  .month {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: #005fa9;
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px; 
    box-sizing: border-box;
    color: #f7f7f7; 
    display: block;
    font-family: 'roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 23.04px;
    padding-bottom: 1px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1px;
    text-align: center;
    text-rendering: optimizeSpeed;
    text-transform: uppercase;
  }

  .day {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: #ffffff;
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-sizing: border-box;
    color: #444444;
    display: block;
    font-family: 'roboto', sans-serif;
    font-size: 18px;
    font-weight: 900;
    line-height: 27px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    text-align: center;
    text-rendering: optimizeSpeed;
  }

  .fieldBody {
    box-sizing: border-box;
    color: #000000;
    display: block;
    font-family: 'roboto', sans-serif;
    line-height: 24px;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    text-rendering: optimizeSpeed;
    text-size-adjust: 100%;
  
  }

  #textP {
    box-sizing: border-box;
    color: #000000;
    display: block;
    font-family: 'roboto', sans-serif;
    line-height: 24px;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    text-rendering: optimizeSpeed;
    text-size-adjust: 100%;
  }

  #text {
    box-sizing: border-box;
    color: #000000;
    display: block;
    font-family: 'roboto', sans-serif;
    font-size: 19.2px;
    font-weight: 100;
    line-height: 26.88px;
    margin-block-end: 28.8px;
    margin-block-start: 0;
    padding-bottom: 28.8px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    text-rendering: optimizeSpeed;
    text-size-adjust: 100%;
  }



    `;
  }



  render() {
    return html`


<div class="cards">
 

  <div class="card-container">
    <div class="card-content">

      <div class="bHover">
        <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">
          <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T" class = "img"></a>
      </div>

      <div class="article-top">
    
        
        <div class="post-date">
        <date-chip date="2021-10-10"></date-chip>
          <!--
          <span class="month">Oct</span>
          <span class="day">10</span>        
  -->
        </div>

        <h3>
          <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies" class="classTitle">University reminds employees of flu, COVID-19 vaccines, resources and policies</a>
        </h3>
      
        <span property="schema:name" content="University reminds employees of flu, COVID-19 vaccines, resources and policies" class="rdf-meta hidden"></span>

        <div class="fieldBody">
            <div property="textP">
              <p id="text">Updated information for University employees, as it relates to flu and COVID-19 vaccine resources, health plan coverage and absence policies. </p>
        </div>
      
   </div>

      </div>
    </div>
  </div>
</div>
      


  `;
  }
}
