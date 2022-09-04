import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function handler(req, res) {
//   if (req.method === 'DELETE') {
//     // execute some code here
//   }
//   dynamic route work for all method, GET, POST, DELETE and etc

  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
