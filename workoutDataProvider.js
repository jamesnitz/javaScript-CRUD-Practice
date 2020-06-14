let workOuts = []

export const useWorkOuts = () => {
  return workOuts
}

export const getWorkOuts = () => {
  return fetch ("http://localhost:3000/exercises")
  .then(response => response.json())
  .then(
    parsedExercises => {
      workOuts = parsedExercises.slice()
    }
  )
}

export const addworkOut = workOut => {
  return fetch ("http://localhost:3000/exercises", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workOut)
  })
  .then(getWorkOuts)
}


export const deleteWorkOut = workId => {
  return fetch(`http://localhost:3000/exercises/${workId}`, {
      method: "DELETE"
  })
      .then(getWorkOuts)
}

export const editWorkOut = (workObject) => {
  return fetch(`http://localhost:3000/exercises/${workObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(workObject)
  })
  .then(getWorkOuts)
}