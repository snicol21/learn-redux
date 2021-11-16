import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import { loadBugs, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);

// store.dispatch(userAdded({ name: "User1" }));
// store.dispatch(userAdded({ name: "User2" }));
// store.dispatch(userAdded({ name: "User3" }));
// store.dispatch(userAdded({ name: "User4" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug1" }));
// store.dispatch(bugAdded({ description: "Bug2" }));
// store.dispatch(bugAdded({ description: "Bug3" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugRemoved({ id: 1 }))

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
