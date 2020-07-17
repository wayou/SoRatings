chrome.webRequest.onHeadersReceived.addListener(
  function (info) {
    var headers = info.responseHeaders;
    for (var i = headers.length - 1; i >= 0; --i) {
      var header = headers[i].name.toLowerCase();
      if (
        header == "x-frame-options" ||
        header == "frame-options" ||
        header == "access-control-allow-origin"
      ) {
        headers.splice(i, 1); // Remove header
      }
    }
    headers.push({
      name: "access-control-allow-origin",
      value: "*",
    });
    return { responseHeaders: headers };
  },
  {
    urls: [
      //   "<all_urls>",
      "*://*.askubuntu.com/*",
      "*://*.mathoverflow.net/*",
      "*://*.blogoverflow.com/*",
      "*://*.serverfault.com/*",
      "*://*.stackoverflow.com/*",
      "*://*.stackexchange.com/*",
      "*://*.stackapps.com/*",
      "*://*.stackmod.blog/*",
      "*://*.stackoverflow.blog/*",
      "*://*.stackoverflowbusiness.com/*",
      "*://*.superuser.com/*",
      "*://*.tex-talk.net/*",
      "*://*.thesffblog.co/*",
    ],
  },
  ["blocking", "responseHeaders"]
);
