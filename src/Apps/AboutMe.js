import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
    return (
    <div className={`appDesktop aboutMe`}>
        <div className="avatar">
            <img src="./apps/me.jpg"/>
        </div>
        <h1 className="nameMe">
            Mikael Oliveira
        </h1>
        <p>
        <span className="normal">
            I'm a web developer, I know 
            <span className="react tec">React</span> ,  
            <span className="vue tec">Java</span> , <span className="php tec">PHP</span> , 
            <span className="mysql tec">MySQL</span> , <span className="nodejs tec">NodeJS</span> ,
            <span className="html tec">Html</span> , <span className="css tec">Css</span> ,  
            <span className="javascript tec">JavaScript</span> and <span className="ajax tec">Ajax</span></span>
            

        </p>
    </div>
    )
    }
}

export default AboutMe;