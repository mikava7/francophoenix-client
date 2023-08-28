import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchByAspect } from "../../../redux/slices/grammer/grammerSlice";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../Utility/ErrorMessage";
import { StyledLink } from "../../../Styles/globalStyles";
import AspectTopicPage from "../AspectTopics/AspectTopicPage";
import GrammerTopic from "../AspectTopics/GrammerTopic";
const Articles = () => {
  const { aspect } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.grammer.topicsByAspect) || {};
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const error = useSelector((state) => state.grammer.error);
  // console.log("articles", articles);
  // console.log("articles", aspect);
  const aspectToRender = articles[aspect] || []; // Extract array based on aspect
  // console.log("aspectToRender", aspectToRender);

  useEffect(() => {
    dispatch(fetchByAspect(aspect));
  }, [dispatch, aspect]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      {aspectToRender &&
        aspectToRender?.map((topic) => (
          <StyledLink key={topic._id} to={`/grammar-topics/${topic._id}`}>
            <GrammerTopic topics={topic} />{" "}
            {/* Adjust the prop name as needed */}
          </StyledLink>
        ))}
    </div>
  );
};

export default Articles;
