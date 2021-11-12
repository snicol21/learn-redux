import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"

let lastId = 0;

// Slice --> Actions and Reducers
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      })
    },
    bugRemoved: (bugs, action) => {
      bugs.filter(bug => bug.id !== action.payload.id)
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id)
      bugs[index].resolved = true;
    }
  }
})

export const { bugAdded, bugRemoved, bugResolved } = slice.actions
export default slice.reducer;

// Memoization Selectors
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)
// bugs => get unresolved bugs from the cache