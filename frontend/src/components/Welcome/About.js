import React from "react";
import "./styles.css";


const About = () => (
    <div id="about" className="vh container"> 
        <h3 className="center">Sobre o curso</h3>   
        <div className="row">
            <div className="col s12 m12 l3 center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Scratch_Cat.png" alt="scratch"></img>
            </div>  
            <div className="col m12 l9 h-100">
                <p>
                O curso começa a jornada introduzindo a lógica de programação com uma linguagem divertida e orientada a blocos, onde os alunos poderão entender visualmente como funciona a programação.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col s12 s12 m12 l3 center">
                <img src="https://i.imgur.com/WBvNDfq.jpg" alt="python"></img>
            </div>  
            <div className="col m12 l9 h-100">
                <p>
                    Após uma boa base em resolver problemas pensando algoritmicamente, é hora de iniciar os estudos com uma linguagem de programação fácil, elegante, legível e extremamente poderosa, o Python 3. Neste módulo o aluno aprenderá programação em um nível um pouco menor.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col s12 m12 l3 center">
                <img src="data:image/jpeg;base64,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" alt="arduino"></img>
            </div>  
            <div className="col m12 l9 h-100">
                <p>
                    Para finalizar a jornada, o aluno verá uma das utilidades práticas da programação no mundo real: Arduino.
                </p>
            </div>
        </div>
    </div>
);

export default About;