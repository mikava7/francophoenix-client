import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Dialogue2 from "../audio/dialogues/06VED.mp3";
// import { dialogue2, dialogue2Eng } from "../data/dialogue";

const AdvancedPage = () => {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [showTranslations, setShowTranslations] = useState(
  //   dialogue2.map(() => false)
  // );
  // const [highlightedLine, setHighlightedLine] = useState(null);
  // const [showAllTranslations, setShowAllTranslations] = useState(false);
  // const handlePlayPause = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  // const handleShowTranslation = (index) => {
  //   setShowTranslations((prevShowTranslations) => {
  //     const updatedShowTranslations = [...prevShowTranslations];
  //     updatedShowTranslations[index] = !updatedShowTranslations[index];
  //     return updatedShowTranslations;
  //   });
  // };
  // const handleToggleAllTranslations = () => {
  //   setShowAllTranslations(!showAllTranslations);
  // };
  // useEffect(() => {
  //   const handleTimeUpdate = () => {
  //     const currentTime = audioRef.current.currentTime;
  //     const lineIndex = dialogue2.findIndex(
  //       (line, index) =>
  //         currentTime >= line.startTime &&
  //         (index === dialogue2.length - 1 ||
  //           currentTime < dialogue2[index + 1].startTime)
  //     );
  //     setHighlightedLine(lineIndex);
  //   };
  //   audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
  //   return () => {
  //     audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, []);
  // return (
  //   <PageWrapper>
  //     <Title>Dialogue 2</Title>
  //     <ToggleTranslationsButton onClick={handleToggleAllTranslations}>
  //       {showAllTranslations
  //         ? "Hide All Translations"
  //         : "Show All Translations"}
  //     </ToggleTranslationsButton>
  //     <Content>
  //       {dialogue2.map((line, index) => (
  //         <React.Fragment key={index}>
  //           <ChapterInfo>
  //             {line.chapter} - {line.chapterTitle}
  //           </ChapterInfo>
  //           <LessonTitle>{line.lessonTitle}</LessonTitle>
  //           <DialogueLine highlighted={index === highlightedLine}>
  //             <Speaker>{line.speaker}:</Speaker>
  //             <Text>{line.text}</Text>
  //           </DialogueLine>
  //           <EngDialogueLine
  //             show={showAllTranslations || showTranslations[index]}
  //           >
  //             <Speaker>{dialogue2Eng[index].speaker}:</Speaker>
  //             <Text>{dialogue2Eng[index].text}</Text>
  //           </EngDialogueLine>
  //           {(!showAllTranslations || showTranslations[index]) && (
  //             <ShowTranslationButton
  //               onClick={() => handleShowTranslation(index)}
  //             >
  //               {showTranslations[index]
  //                 ? "Hide Translation"
  //                 : "Show Translation"}
  //             </ShowTranslationButton>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </Content>
  //     <AudioControls>
  //       <audio ref={audioRef} src={Dialogue2} />
  //       <PlayPauseButton onClick={handlePlayPause}>
  //         {isPlaying ? "Pause" : "Play"}
  //       </PlayPauseButton>
  //     </AudioControls>
  //   </PageWrapper>
  // );
};

export default AdvancedPage;
const ToggleTranslationsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
const PageWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #ffebeb;
  color: #000;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const DialogueLine = styled.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${(props) => (props.highlighted ? "green" : "black")};
`;

const EngDialogueLine = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  color: red;
  margin-bottom: 10px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Speaker = styled.span`
  font-weight: bold;
`;

const Text = styled.span`
  margin-left: 5px;
`;

const ShowTranslationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const AudioControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PlayPauseButton = styled.button`
  background-color: #007bff;
  color: #000;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;
const ChapterInfo = styled.div`
  font-weight: bold;
`;

const LessonTitle = styled.div`
  font-style: italic;
  margin-bottom: 5px;
`;
