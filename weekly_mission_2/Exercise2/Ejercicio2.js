console.log('******************Ejercicio 2**********************\n')
console.log('--------Uso de forEach en una lista---------')
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ];
   console.log('--------Imprimiendo el nombre de cada explorer--------')
   //forEach
   //explorers.forEach(function(explorer){
   //   console.log(explorer.name)
   //})
   // forEach con function arrow
   explorers.forEach((explorer) => console.log(explorer.name));

   console.log('\n-----Imprimiendo el stack de cada explorer usando forEach--------')
/* explorers.forEach(function(explorer){
    console.log(`El ${explorer.name} tiene un stack en ${explorer.stack}`)
   })
   */
   // Con function arrow
   explorers.forEach((explorer) => console.log(`El "${explorer.name}" tiene stacks en ${explorer.stack}`))

