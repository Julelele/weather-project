import StartContent from "../components/StartContent/StartContent";
import Content from "../components/Content/Content";
import { useSelector } from "react-redux";

const HomePage = () => {
  const content = useSelector((state) => state.content.contentIsVisible);

  return (
    <div>
      {!content && <StartContent />}
      {content && <Content />}
    </div>
  );
};

export default HomePage;
