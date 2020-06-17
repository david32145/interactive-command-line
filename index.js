const { prompt } = require("enquirer")

async function main() {
  await prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your name?'
    }, {
      type: 'input',
      name: 'age',
      message: 'What is your age?',
      validate: (value) =>  {
        const age = Number(value)
        if(isNaN(age)) {
          return "The age must be an number"
        }

        if(age < 0 || age > 100) {
          return "The age must be between 0 and 100"
        }
        return true
      }
    }, {
      type: 'input',
      name: 'work',
      message: 'In what you work?'
    },
     {
       type: 'select',
       name: 'gender',
       message: 'What is your gender?',
       choices: ["Male", "Female", "Other"]
     }
  ])
}

main()
  .then()
  .catch(console.error)