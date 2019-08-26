const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: "",
        role: "",
        subscriber: false,
        registration_key: ""
      }
    }
  }
};

export default initialState;
