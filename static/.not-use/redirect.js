const link = (e) => {
  if (e==="/") {
  //addscript(/js/list.js)
  //addscript(/js/list.js)
    // get id
    // template
    // innerhtml blog load more
    // innerhtml note load more
    // te
  }
  // alert(e);
  const nextTitle = "My new page";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, e);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, e);
};
