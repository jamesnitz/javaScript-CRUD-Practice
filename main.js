import {workOutListComponent} from "./workoutList.js"
import {getWorkOuts} from "./workoutDataProvider.js"

getWorkOuts().then(
  () => {
    workOutListComponent()
  }
)