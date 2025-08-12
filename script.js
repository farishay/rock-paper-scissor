let userScore = 0;
let computerScore = 0;

function play(icon, userChoice) {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('userChoice').textContent = icon;
    document.getElementById('compChoice').textContent = computerChoice === 'Rock' ? '👊' : computerChoice === 'Paper' ? '🖐️' : '🤞';

    let resultText = '';
    if (userChoice === computerChoice) {
        resultText = "It's a Draw!";
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        userScore++;
        resultText = "You Win!";
    } else {
        computerScore++;
        resultText = "Computer Wins!";
    }

    document.getElementById('result').textContent = `Score: You - ${userScore}, Computer - ${computerScore}`;
    document.getElementById('score').textContent = resultText;
    document.getElementById('selection').classList.add('show');
}
