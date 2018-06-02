(() => {
  // Constants for each service
  const services = {
    codecommit: "codecommit"
  };

  // URL tokens corresponding to each service
  const urlTokens = {
    [services.codecommit]: "codecommit"
  };

  /**
   * Gets whether the provided URL is part of the specified AWS service.
   *
   * @param {String} service
   * @param {String} url
   * @returns {Boolean}
   */
  const getIsServiceUrl = (service, url = window.location) =>
    url.split("/").indexOf(urlTokens[service]) > -1;

  /**
   * Gets the current service
   *
   * @returns {String}
   */
  const getCurrentService = () => Object.values(services).find(getIsServiceUrl);

  /**
   * Adds a classname to the body of the document that specifies
   * which AWS service is currently in use.
   *
   * @param {String} service
   */
  const updateBodyClassNameByService = service => {
    document
      .getElementsByName("body")[0]
      .classList.add(`pretty-aws-console-${service}`);
  };

  /**
   * Gets the current service and updates the document accordingly.
   */
  const apply = () => {
    updateBodyClassNameByService(getCurrentService());
  };

  apply();
})();
