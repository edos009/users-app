import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    searchValue: "",
    invitedUsers: [],
    isSentInvitation: false
  },
  reducers: {
    dataResponseSuccess(state, actions) {
      state.users = actions.payload.users;
    },
    dataResponseError(state, actions) {
      state.error = actions.payload.error;
    },
    dataResponseIsFetchingFalse(state, actions) {
      state.isFetching = false;
    },
    dataResponseIsFetchingTrue(state, actions) {
      state.isFetching = true;
    },
    setSearchValue(state, actions) {
      state.searchValue = actions.payload.value;
    },
    addInvitationUser(state, actions) {
      if (!state.invitedUsers.includes(actions.payload.id)) {
        state.invitedUsers.push(actions.payload.id);
      }
    },
    removeInvitationUser(state, actions) {
      state.invitedUsers = state.invitedUsers.filter(
        (item) => item !== actions.payload.id
      );
    },
    sendInvitations(state, actions){
      state.isSentInvitation = true;
    }
  },
});

export const {
  dataResponseSuccess,
  dataResponseError,
  dataResponseIsFetchingFalse,
  dataResponseIsFetchingTrue,
  setSearchValue,
  addInvitationUser,
  removeInvitationUser,
  sendInvitations,
} = usersSlice.actions;
export default usersSlice.reducer;
