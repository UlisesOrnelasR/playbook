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

   console.log('********Ejercicio 2**********\n')
   console.log('********Uso de map**********')
   
   const Stacks = explorers.map(function(explorers){
    return explorers.stack
   })
   console.log(`los stacks son ${Stacks}`)

   //Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elsemento en un lista se usa el método includes)
   console.log('\n********Uso de FILTER**********')
   const stackJs = explorers.filter(function(explorer){
       if (explorer.stack == 'js'){
        return true
       }
   })
   console.log(stackJs)

