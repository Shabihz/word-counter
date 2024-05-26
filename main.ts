#! /usr/bin/env node

//import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Disply acolourful welcome message
console.log(chalk.bold.bgBlueBright("\n \t\t code with shabih- word counter"));
console.log("=".repeat(60))

//prompt the user to enter a sentance
let answer = await inquirer.prompt([
    {
     name:"sentence",
     type:"input",
     message:"Enter a sentence",
    }
]);

//Terminating the sentence and  spliting it into words based on "spaces"
let words =answer.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count:${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));