import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDialogueTopics } from "../../redux/slices/dialogueTopics/dialogueTopicSlide";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import DialogueTopics from "./dialogueTopics/DialogueTopics/DialogueTopics";
import styled from "styled-components";
const A1Dialogues = () => {
  const dispatch = useDispatch();

  const dialogues =
    useSelector((state) => state.dialogueTopics.dialogueTopics) || [];
  const isLoading = useSelector((state) => state.dialogueTopics.isLoading);
  console.log(dialogues, isLoading);
  useEffect(() => {
    dispatch(fetchDialogueTopics());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {dialogues &&
        dialogues.map((topic) => (
          <StyledLink key={topic._id} to={`/dialogue-topics/${topic._id}`}>
            <DialogueTopics dialogueTopics={[topic]} />
          </StyledLink>
        ))}
    </div>
  );
};

export default A1Dialogues;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: red;
`;
