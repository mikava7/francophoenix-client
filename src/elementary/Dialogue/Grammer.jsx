import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrammer } from "../../redux/slices/elementary/grammerSlice";
import styled from "styled-components";
import Listen from "../../components/Listen";
import { ContinueButtonWrapper } from "../style-elementaryComponant";
const Grammer = ({ lessonsCurrentIndex, Continue }) => {
  const dispatch = useDispatch();
  const grammer = useSelector((state) => state.grammer.grammer) || [];
  const isLoading = useSelector((state) => state.grammer.isLoading);

  console.log("grammer", grammer);
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
                  <li key={index}>
                    <Index>{index + 1}</Index>

                    <OriginalVerbe>
                      <Listen width="5rem" height="5rem" />
                      {verbe}
                    </OriginalVerbe>
                    <GeoVerbe>{item.verbeGeo[index]}</GeoVerbe>
                  </li>
                ))}
              </ListContainer>
              <ListContainer>
                <h2>examples</h2>

                {item.examples &&
                  item.examples.map((example, index) => (
                    <li key={index}>
                      {index + 1} <OriginalVerbe>{example}</OriginalVerbe>
                      <GeoVerbe>
                        {item.examplesGeo && item.examplesGeo[index]}
                      </GeoVerbe>
                    </li>
                  ))}
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

  li {
    list-style: none;
    line-height: 2rem;
  }
`;
const OriginalVerbe = styled.span`
  font-size: 1.4rem;
  letter-spacing: 1/8px;

  font-weight: bold;
  &::after {
    content: " - ";
  }
  &::before {
    content: " . ";
  }
`;
const GeoVerbe = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1.4px;
`;
const Index = styled.span`
  font-size: 1.6rem;
`;

export default Grammer;
