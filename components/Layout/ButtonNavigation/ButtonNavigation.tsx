import RoutingButton from "@/components/Utils/RoutingButton/RoutingButton";
import useQuestionsStore from "@/stores/useQuestionsStore";
import "./ButtonNavigation.styles.scss";

type FooterProps = {
  id: string;
  handleClick?: () => void;
};

export const ButtonNavigation = (props: FooterProps) => {
  const { id, handleClick } = props;
  const { questions } = useQuestionsStore();
  const currentIndex = questions.findIndex((q) => q.id === id);
  const isLastQuestion = currentIndex === questions.length - 1;
  const isSubmitPage = id === "202" || id === "102";

  const NextQuestionButton =
    !isLastQuestion && !isSubmitPage ? (
      <RoutingButton
        type="button"
        direction="forward"
        id={id}
        handleClick={handleClick}
      />
    ) : (
      <RoutingButton
        type="submit"
        direction="result"
        id={id}
        form="form"
        handleClick={() => handleClick}
      />
    );

  return (
    <footer className="footer">
      <RoutingButton type="button" direction="back" />
      <RoutingButton type="button" direction="home" />
      {id === "2" ? (
        <RoutingButton type="button" direction="path" />
      ) : (
        NextQuestionButton
      )}
    </footer>
  );
};

export default ButtonNavigation;
