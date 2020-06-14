import {useWorkOuts, editWorkOut, addworkOut, deleteWorkOut} from "./workoutDataProvider.js"
import {workOutComponent} from "./workout.js"

export const workOutListComponent = () => {

  const eventHub = document.querySelector(".container");
  const contentTarget = document.querySelector(".workOuts");
  const allWorkOuts = useWorkOuts();

  eventHub.addEventListener("click", event => {
    if (event.target.id === "add-workout") {
      let name = document.getElementById("workOutName").value
      let reps = document.getElementById("workOutReps").value

      let newObj = {
        name: name,
        reps: reps
      }
      addworkOut(newObj).then(
        () => {
          let newworkOuts = useWorkOuts()
          renderWorkOuts(newworkOuts)
          document.getElementById("workOutName").value = ""
          document.getElementById("workOutReps").value = ""
        }
      )
    }
  })

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteWorkOut--")) {
      const [prefix, id] = event.target.id.split("--")
      deleteWorkOut(id).then(
        () => {
          let workouts = useWorkOuts()
          renderWorkOuts(workouts)
        }
        )
      }
    })
    
    eventHub.addEventListener("click", event => {
      if (event.target.id.startsWith("editWorkOut--")) {
        const [prefix, id] = event.target.id.split("--")
        let currentWorkOuts = useWorkOuts()
        let found = currentWorkOuts.find((entry) => entry.id === parseInt(id))
        console.log(found)
        document.getElementById("workOutName").value = found.name
        document.getElementById("workOutReps").value = found.reps
        document.getElementById("add-workout").innerHTML = "Edit Work Out"
        document.getElementById("add-workout").id = `saveEdit--${parseInt(id)}`

      }
    })
    
    eventHub.addEventListener("click", event => {
      if (event.target.id.startsWith("saveEdit--")) {
        const [prefix, id] = event.target.id.split("--")
        const editedWorkout = {
          id: parseInt(id),
          name: document.getElementById("workOutName").value,
          reps: document.getElementById("workOutReps").value
        }
        editWorkOut(editedWorkout).then(
          () => {
            let addButton = document.querySelector(".addEditButton")
            addButton.id = "add-workout"
            document.getElementById("workOutName").value = ""
            document.getElementById("workOutReps").value = ""
            let newworkOuts = useWorkOuts()
            renderWorkOuts(newworkOuts)
          }
        )
        
    }
  })





  const renderWorkOuts = (workOuts) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
    ${
      workOuts.map(
        singleWorkOut => {
          return workOutComponent(singleWorkOut)
        }
      ).join(" ")
    }
    `
  }
  renderWorkOuts(allWorkOuts)

}
