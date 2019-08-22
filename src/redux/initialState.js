const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: '',
        role: '',
        subscriber: false
      }
    }
  }
};

export default initialState;
