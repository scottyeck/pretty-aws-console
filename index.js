(function() {
  function getIsCodeCommit(url) {
    return url.split("/").indexOf("codecommit") > -1;
  }

  if (getIsCodeCommit(window.location.href)) {
    document
      .getElementsByTagName("body")[0]
      .classList.add("pretty-aws-console-code-commit");
  }
})();
