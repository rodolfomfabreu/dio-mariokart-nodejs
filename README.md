# 🏎️ DIO Mario Kart Node.js

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16%2B-339933?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/JavaScript-ES2021-F7DF1E?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/Console%20App-CLI-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/rodolfomfabreu/dio-mariokart-nodejs?style=for-the-badge"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Funcionalidades | Features](#funcionalidades--features)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure]
- [Configuração e Execução | Setup & Run](#configuração-e-execução--setup--run)
- [Rotas e Telas | Routes & Screens](#rotas-e-telas--routes--screens)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> Simulador de corrida inspirado em Mario Kart, feito em Node.js para o bootcamp DIO. Dois personagens (Mario e Luigi) competem em rodadas com testes de velocidade, manobrabilidade e poder, com resultados aleatórios e confrontos. Toda a interação ocorre via console.

**EN:**
> Mario Kart-inspired race simulator built in Node.js for the DIO bootcamp. Two characters (Mario and Luigi) compete in rounds testing speed, maneuverability, and power, with random results and confrontations. All interaction happens via the console.

---

## 👾 Personagens | Characters

    <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

      <h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

---

## 🏁 Funcionalidades | Features

**PT-BR:**
- Simulação de corrida entre Mario e Luigi
- Rodadas com blocos aleatórios: reta, curva ou confronto
- Testes de atributos: velocidade, manobrabilidade e poder
- Sistema de pontos e desempate automático
- Saída detalhada no console

**EN:**
- Race simulation between Mario and Luigi
- Rounds with random blocks: straight, curve, or confrontation
- Attribute tests: speed, maneuverability, and power
- Point system and automatic tiebreaker
- Detailed console output

---

## 🚀 Tecnologias | Technologies

- **Node.js 16+**
- **JavaScript (ES2021+)**

---

## 🗂️ Estrutura | Structure
```
dio-mariokart-nodejs/
├── docs/           # GIFs dos personagens
├── src/
│   └── index.js    # Código principal do simulador
├── package.json
└── README.md
```

---

## ⚙️ Configuração e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 16+ e npm
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o simulador:**
   ```bash
   npm start
   ```
   Acompanhe a corrida pelo console.

**EN:**
1. **Prerequisites:** Node.js 16+ and npm
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the simulator:**
   ```bash
   npm start
   ```
   Watch the race in your console.

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com ❤️ para estudos de Node.js e simulação de jogos.<br/>
  Made with ❤️ for Node.js and game simulation studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>