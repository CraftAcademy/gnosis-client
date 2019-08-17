const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: '',
        role: ''
      }
    }
  }
};

export default initialState;
