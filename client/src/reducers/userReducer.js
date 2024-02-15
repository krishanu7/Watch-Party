export const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    case "UPDATE_VIDEO_ID":
      return {
        ...state,
        videoID: action.videoId,
      };
    case "UPDATE_USER_LIST":
      return {
        ...state,
        userList: action.users,
      };
    case "UPDATE_MESSAGES":
      const { id, from, text, timestamp } = action.data;
      return {
        ...state,
        message: [
          ...state.message,
          {
            id,
            from,
            text,
            timestamp,
          },
        ],
      };
    case "UPDATE_SOCKET":
      return {
        ...state,
        socket: action.socket,
      };
    default:
      return state;
  }
};
