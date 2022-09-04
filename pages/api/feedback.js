// folder name MUST BE api
// you can name the file in your folder as you like, eg in this case "feedback.js"

// in the api folder:
// we don't export the components
// access server side code
// any code we write here will not end up in client side bundle/ will not be expose to the visitor of our webpage

function handler(req, res) {
  res.status(200).json({ message: 'This works!' });
}

export default handler;
