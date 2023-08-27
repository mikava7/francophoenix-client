import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchByAspect } from "../../../redux/slices/grammer/grammerSlice";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../Utility/ErrorMessage";
import { StyledLink } from "../../../Styles/globalStyles";
import AspectTopicPage from "../AspectTopics/AspectTopicPage";
import GrammerTopic from "../AspectTopics/GrammerTopic";
const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.grammer.topicsByAspect) || {};
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);

  useEffect(() => {
    dispatch(fetchByAspect("article"));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h1>Articles</h1>
      {articles.article &&
        articles.article.map((topic) => (
          <StyledLink key={topic._id} to={`/grammar-topics/${topic._id}`}>
            <GrammerTopic topics={topic} />{" "}
            {/* Adjust the prop name as needed */}
          </StyledLink>
        ))}
    </div>
  );
};

export default Articles;
