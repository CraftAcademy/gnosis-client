const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: '',
        role: '',
        subscriber: false,
        subscription_key: ''
      }
    }
  }
};

export default initialState;
