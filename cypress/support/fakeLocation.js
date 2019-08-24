const fakeLocation = (options) => ({
  onBeforeLoad(win) {
    const fakeLocation = {
      coords: {
        accuracy: options.accuracy || 5,
        altitude: options.altitude || null,
        altitudeAccuracy: options.altitudeAccuracy || null,
        heading: options.heading || null,
        latitude: options.latitude || null,
        longitude: options.longitude || null,
        speed: options.speed || null
      },
      timestamp: options.timestamp || 3000
    }
    cy.stub(win.navigator.geolocation, 'getCurrentPosition')
      .callsFake((cb) => {
        return cb(fakeLocation);
      });
  }
})


export default fakeLocation