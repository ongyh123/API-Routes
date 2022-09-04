import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
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
