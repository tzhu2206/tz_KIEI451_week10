let observableArray = require("data/observable-array");
let observableModule = require("data/observable");

exports.pageLoaded = async function (args) {
  let page = args.object
  let pageData = new observableModule.Observable();

  // ⬇️ ⬇️ ⬇️ YOUR CODE BEGINS HERE ⬇️ ⬇️ ⬇️

  // 👇 uncomment and replace yourVariable
  let postsData = new observableArray.ObservableArray([])

  // fetch posts from my API, store results in a variable called json
  let response = await fetch('https://kelloggram.netlify.app/.netlify/functions/get_posts')
  let json = await response.json()

  // loop through json and fill postsData up with data it needs
  for (let i = 0; i < json.length; i++) {
    let post = json[i]
    // post has imageUrl and username - create a new object and push it onto postsData
    let postObject = {
      imageUrl: post.imageUrl,
      username: post.username
    }
    postsData.push(postObject)
  }

  // 👇 uncomment and replace with your variable name
  pageData.set('posts', postsData)

  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE ⬆️ ⬆️ ⬆️

  page.bindingContext = pageData
}
