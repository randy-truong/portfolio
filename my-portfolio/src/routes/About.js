import profile from "../assets/img/SDIM0855.jpg"

function About() {
    return(
        <div className="content">
            
            <div className="content-item">

            <div className="about-grid">
                <div className="about-item-1">
                    <img className="about-img" src={profile}></img>
                </div>
                <div className="about-item-2">
                    <b>Randy Truong</b> is currently an undergraduate senior at Emory University. 
                    <br></br>
                    He is enthusiastic about working at the intersection between visual arts, computer science, and data science while weaving in anthropological perspectives and human-centered concerns in all of its facets. 
                    His research interests include topics in affective computing, accessibility, prosocial deception, and multimodal expression via sonification and visualization. 
                    In his free time, Randy plays with photography, cinematography, creative coding, and interactive art installations / immersive environments.

                    

                    <br></br>
                    <br></br>
                    Degrees in pursuit:
                    <ul>
                        <li>B.S. in Computer Science</li>
                        <li>B.S. in Quantitative Sciences with Anthropology</li>
                    </ul> 

                    <br></br>
                    <br></br>
                    Randy asks his visitors to reflect on one question: "What components make up your human?"

                    <br></br>
                    <br></br>
                    <br></br>
                    cv / resume (to be linked)
                </div>
            </div>

            </div>
        </div>
    );
}

export default About;