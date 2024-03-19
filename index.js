import chalk from "chalk";

const wilders = ["Adeline", "Rostom", "Maxime", "Alp"];
const color = ['blue', 'red', 'green', 'cyan',];

for (let i = 0; i < wilders.length; i++) {
    console.log(chalk[color[i]](wilders[i]))
}