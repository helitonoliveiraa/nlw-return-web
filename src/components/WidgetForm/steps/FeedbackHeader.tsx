import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

type FeedbackHeaderProps = {
  title?: string;
  image?: {
    source: string;
    alt: string;
  },
  onFeedbackRestartRequest?: () => void;
}

export function FeedbackHeader({ title, image, onFeedbackRestartRequest }: FeedbackHeaderProps) {
  return (
    <header>
      {!!image && (
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
      )}

      <span className="text-xl leading-6 flex items-center gap-2">
        {!!image && <img src={image.source} alt={image.alt} className="w-6 h-6" />}

        {title ?? 'Deixe seu feedback'}
      </span>
      
      <CloseButton />
    </header>
  );
}