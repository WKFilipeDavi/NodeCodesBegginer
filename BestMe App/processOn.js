process.stdout.write("Alguma coisa \n");

const question = [
    "Olá Filipe",
    "New job",
    "Be careful with your body",
    "hair health",
    "be happy and fabulous"
]

const ask = (index = 0) => {
    process.stdout.write(question[index] + " > ");
}

ask();

const answer = [];
process.stdin.on("data", data => {
    answer.push(data.toString().trim());
    if (answer.length < question.length) {
        ask(answer.length)
    } else {
        process.exit();
    }
})

process.on('exit', () => {
    console.log('volte amanha');
})