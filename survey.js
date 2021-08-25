/*
a quick survey app which asks the user a bunch of questions like their 
favourite music, activity, food, sport, etc. 
It will then generate a profile description for them to use online.
*/

const readline = require("readline");
const answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer) => {
          answers.push(answer);
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              answers.push(answer);
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  answers.push(answer);
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      answers.push(answer);
                      console.log(`\nThank you for your valuable feedback:
${answers[0]} loves ${answers[1]} while singing ${answers[2]},
${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport,
and is amazing at ${answers[6]}.`);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

/*
What's your name? Nicknames are also acceptable :) Sharon
What's an activity you like doing? playing the piano
What do you listen to while doing that? my music
Which meal is your favourite (eg: dinner, brunch, etc.) dinner
What's your favourite thing to eat for that meal? beef stew
Which sport is your absolute favourite? football
What is your superpower? In a few words, tell us what you are amazing at! sleeping

Thank you for your valuable feedback:
Sharon loves playing the piano while singing Let It Go,
beef stew for dinner, prefers football over any other sport,
and is amazing at sleeping.
*/
