export const workOutComponent = (workOut) => {
  return `
  <div class="work__card">
    <div>Name: ${workOut.name}</div>
    <div>Reps: ${workOut.reps}</div>
    <button class="deleteButton" id="deleteWorkOut--${workOut.id}">Delete</button>
    <button id="editWorkOut--${workOut.id}">Edit</button>
  </div>
  `
}
