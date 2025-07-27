const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

async function rollDice() {
    const NUMBER_FACES = 6;
    return Math.floor(Math.random() * NUMBER_FACES) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result = 'CONFRONTO';

    switch(true) {
        case random < 0.33:
            result = 'RETA';
            break;
        case random < 0.66:
            result = 'CURVA';
            break;
        default: 
            result = 'CONFRONTO';
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 0; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`\nBloco: ${block}`);

        let diceResultOne = await rollDice();
        let diceResultTwo = await rollDice();
        let totalTestSkillOne = 0;
        let totalTestSkillTwo = 0;

        if (block === "RETA") {
            totalTestSkillOne = diceResultOne + character1.VELOCIDADE;
            totalTestSkillTwo = diceResultTwo + character2.VELOCIDADE;
            await logRollResult(character1.NOME, "velocidade", diceResultOne, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResultOne, character2.VELOCIDADE);
        } else if (block === "CURVA") {
            totalTestSkillOne = diceResultOne + character1.MANOBRABILIDADE;
            totalTestSkillTwo = diceResultTwo + character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, "manobrabilidade", diceResultOne, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResultOne, character2.MANOBRABILIDADE);
        } else if (block === "CONFRONTO") {
            let powerResultOne = diceResultOne + character1.PODER;
            let powerResultTwo = diceResultTwo + character2.PODER;

            console.log(`
            🥊🥊 ${character1.NOME} confrontou ${character2.NOME}
            `);

            await logRollResult(character1.NOME, "poder", diceResultOne, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResultOne, character2.PODER);
            
            let victoryMessage = ``;
            if (powerResultOne > powerResultTwo && character2.PONTOS > 0) {
                victoryMessage = `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
                character2.PONTOS--;
            }
            if (powerResultTwo > powerResultOne && character1.PONTOS > 0) {
                victoryMessage = `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
                character1.PONTOS--;
            } 

            console.log(
                powerResultTwo === powerResultOne ? 
                `\nConfronto empatado! Nenhum ponto foi perdido` :
                `${victoryMessage}`
            );
        }

        if (totalTestSkillOne > totalTestSkillTwo) {
            console.log(`\n${character1.NOME} marcou 1 ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkillTwo > totalTestSkillOne) {
            console.log(`\n${character2.NOME} marcou 1 ponto!`);
            character2.PONTOS++;
        }
        console.log("-------------------------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log(`\nResultado final:`);
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
    if (character1.PONTOS > character2.PONTOS) {
        console.log(`${character1.NOME} venceu a corrida! \n\nParabéns 🏆`);
    } 
    else if (character2.PONTOS > character1.PONTOS) {
        console.log(`${character2.NOME} venceu a corrida! \n\nParabéns 🏆`);
    } else {
        console.log(`Empate!`);
        console.log(`\nVamos ao desempate\n`);
        await playRaceEngine(character1, character2);
        await declareWinner(player1, player2);
    }
}

async function main() {
    console.log(`
        🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...
    `);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}

main();