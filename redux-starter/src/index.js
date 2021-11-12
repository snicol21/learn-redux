import configureStore from "./store/configureStore"
import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs } from "./store/bugs"
import { projectAdded } from "./store/projects"

const store = configureStore()

store.subscribe(() => {
    console.log("Store Changed!")
})

store.dispatch(projectAdded({ name: "Project 1" }))
store.dispatch(bugAdded({ description: "Bug1" }))
store.dispatch(bugAdded({ description: "Bug2" }))
store.dispatch(bugAdded({ description: "Bug3" }))
store.dispatch(bugResolved({ id: 1 }))
// store.dispatch(bugRemoved({ id: 1 }))

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())

console.log(x === y)