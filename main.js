import {workOutListComponent} from "./workoutList.js"
import {getWorkOuts} from "./workoutDataProvider.js"
import {mappy} from "./mapbox.js"
getWorkOuts().then(
  () => {
    workOutListComponent()
  }
)

mappy()