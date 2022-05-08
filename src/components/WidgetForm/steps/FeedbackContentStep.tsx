import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "../";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackHeader } from "./FeedbackHeader";

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType, 
  onFeedbackRestartRequest, 
  onFeedbackSent 
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTyeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    try {
      await api.post('feedbacks', {
        type: feedbackType,
        comment,
        screenshot,
      });

      setIsSendingFeedback(false);
      onFeedbackSent();
    } catch (err) {
      console.log({err});
      setIsSendingFeedback(false);
    }
  }

  return (
    <>
      <FeedbackHeader 
        title={feedbackTyeInfo.title} 
        image={feedbackTyeInfo.image} 
        onFeedbackRestartRequest={onFeedbackRestartRequest}
      />

      <form 
        onSubmit={handleSubmitFeedback}
        className="my-4 w-full"
      >
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontencendo..."
          value={comment}
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-start text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500" 
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}