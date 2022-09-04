import { Fragment } from 'react';

import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    // <alternatively> fetch('/api/' + id);
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback); // data.feedback, because we wanna access the property in [feedbackId] with the name feedback that hold the selectedFeedback
      }); // /api/some-feednack-id
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li> // bind a build in JavaScript method to pre configure the function for future execution
        ))}
      </ul>
    </Fragment>
  );
}

//you should not use fetch() in getStaticProps to talk to your own API, only got external API like firebase
//directly import it and use that code (buildFeedbackPath and extractFeedbackPath)
//write nodeJS logic
//The two dependency, buildFeedbackPath and extractFeedbackPath will not be included in the client bundle,
// if we are not using it any where in the client side code

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
