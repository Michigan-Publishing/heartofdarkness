var ghPages = require("gh-pages")

ghPages.publish("public", { branch: "gh-pages" }, function(err) {
  if (err) {
    console.log("An error has occurred")
  } else {
    console.log("Deployed to gh-pages branch")
  }
})
