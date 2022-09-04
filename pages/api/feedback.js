// folder name MUST BE api
// you can name the file in your folder as you like, eg in this case "feedback.js"

// in the api folder:
// we don't export the components
// access server side code
// any code we write here will not end up in client side bundle/ will not be expose to the visitor of our webpage

import fs from 'fs'; // nodeJS feature
import path from 'path'; // nodeJS feature

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(), //unique identifier, create a new date object and covert it into a string, not a good one, as two request might be created in the same day, but its okay, just a sample
      email: email,
      text: feedbackText,
    };
    // store that in a database or in a file
    const filePath = path.join(process.cwd(), 'data', 'feedback.json'); //cwd = current working directory, store the data in data/feedback.json
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData); // convert into a Javascript Object
    data.push(newFeedback); // push into the array in the data/feedback.json file
    fs.writeFileSync(filePath, JSON.stringify(data)); //  covert the data back to JSON then write it back to the disk
    res.status(201).json({ message: 'Success!', feedback: newFeedback }); // send a response in json format, 201 = added data succesfully
  } else {
    res.status(200).json({ message: 'This works!' });
  }
}

export default handler;
