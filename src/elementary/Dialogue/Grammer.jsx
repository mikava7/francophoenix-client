import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrammer } from "../../redux/slices/elementary/grammerSlice";
import styled from "styled-components";
import { ContinueButtonWrapper } from "../style-elementaryComponant";
import useListenWord from "../../hooks/useListenWord";
// import ListenImg from "../../../public/icons/sound-50.png";
import Listen from "../../components/Listen";
const Grammer = ({ lessonsCurrentIndex, Continue }) => {
  const dispatch = useDispatch();
  const grammer = useSelector((state) => state.grammer.grammer) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);
  const { handleListen, isActiveStates } = useListenWord();

  // console.log("grammer", grammer);
  useEffect(() => {
    dispatch(getGrammer(lessonsCurrentIndex));
  }, [dispatch]);
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <GrammerContainer>
      <ul>
        {grammer &&
          grammer.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <h3>{item.titleGeo}</h3>

              <ListContainer>
                {item.verbe.map((verbe, index) => (
                  <ListItem key={index}>
                    <Index>{index + 1}.</Index>

                    <OriginalVerbe>
                      <ListenIcon
                        onClick={handleListen(verbe)}
                        className={
                          isActiveStates[index] ? "active" : "inactive"
                        }
                        isActive={isActiveStates[index]}
                      >
                        <Listen />
                      </ListenIcon>

                      {verbe}
                    </OriginalVerbe>
                    <GeoVerbe>{item.verbeGeo[index]}</GeoVerbe>
                  </ListItem>
                ))}
              </ListContainer>
              <ListContainer>
                <ListContainer>
                  <h2>examples</h2>

                  {item.examples &&
                    item.examples.map((example, index) => (
                      <ExampleItem key={index}>
                        <Index>{index + 1}.</Index>
                        <ListenIcon
                          onClick={handleListen(example)}
                          className={
                            isActiveStates[index] ? "active" : "inactive"
                          }
                        >
                          <img
                            src={ListenImg}
                            alt="ListenImg"
                            isActive={isActiveStates[index]}
                          />
                        </ListenIcon>
                        <OriginalVerbe>{example}</OriginalVerbe>
                        <GeoVerbe>
                          {item.examplesGeo && item.examplesGeo[index]}
                        </GeoVerbe>
                      </ExampleItem>
                    ))}
                </ListContainer>
              </ListContainer>
            </div>
          ))}
      </ul>
      {Continue}
    </GrammerContainer>
  );
};

const GrammerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2rem;
  justify-content: center;
  ul {
    margin-bottom: 2rem;
  }
`;
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  list-style: none;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gold;
  border-radius: 0 0 0 8px;
  padding: 0.5rem;
  width: 100%;
`;
const OriginalVerbe = styled.span`
  display: flex;
  min-width: 300px;
  font-size: 1.4rem;
  letter-spacing: 1px;

  font-weight: bold;
  &::after {
    content: "  ";
  }
  &::before {
    content: "  ";
  }
`;
const GeoVerbe = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1.4px;
`;
const Index = styled.span`
  font-size: 1.6rem;
`;

const ListenIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.3rem;
  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  &.active > img {
    transform: scale(1.1);
    filter: none;
  }

  &.inactive > img {
    transform: scale(1);
    filter: invert(-150%);
  }
`;
const ExampleItem = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 2px solid gold;
`;
export default Grammer;
