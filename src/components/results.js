import React from "react";
import { BatteryContext } from "../contexts";
import { Container } from "reactstrap";

const Results = () => {
  const { questionSet } = React.useContext(BatteryContext);
  const [score] = React.useState({
    ling: questionSet.reduce((acc, question) => question.type === "Linguistic" ? acc + question.score : acc + 0, 0),
    musi: questionSet.reduce((acc, question) => question.type === "Musical" ? acc + question.score : acc + 0, 0),
    letm: questionSet.reduce((acc, question) => question.type === "Logic and Math" ? acc + question.score : acc + 0, 0),
    spat: questionSet.reduce((acc, question) => question.type === "Spatial" ? acc + question.score : acc + 0, 0),
    betk: questionSet.reduce((acc, question) => question.type === "Bodily and Kinesthetic" ? acc + question.score : acc + 0, 0),
    intr: questionSet.reduce((acc, question) => question.type === "Intrapersonal" ? acc + question.score : acc + 0, 0),
    inte: questionSet.reduce((acc, question) => question.type === "Interpersonal" ? acc + question.score : acc + 0, 0),
    natu: questionSet.reduce((acc, question) => question.type === "Naturalist" ? acc + question.score : acc + 0, 0),
  });
  // React.useEffect(() => {
  //   setScore({ ling: 0, musi: 0, letm: 0, spat: 0, betk: 0, intr: 0, inte: 0 });
  //   questionSet.forEach((question) => {
  //     switch (question.type) {
  //       case "Linguistic": {
  //         return setScore((state) => {
  //           return { ...state, ling: state.ling + question.score };
  //         });
  //       }
  //       case "Musical": {
  //         return setScore((state) => {
  //           return { ...state, musi: state.musi + question.score };
  //         });
  //       }
  //       case "Logic and Math": {
  //         return setScore((state) => {
  //           return { ...state, letm: state.letm + question.score };
  //         });
  //       }
  //       case "Spatial": {
  //         return setScore((state) => {
  //           return { ...state, spat: state.spat + question.score };
  //         });
  //       }
  //       case "Bodily and Kinesthetic": {
  //         return setScore((state) => {
  //           return { ...state, betk: state.betk + question.score };
  //         });
  //       }
  //       case "Intrapersonal": {
  //         return setScore((state) => {
  //           return { ...state, intr: state.intr + question.score };
  //         });
  //       }
  //       case "Interpersonal": {
  //         return setScore((state) => {
  //           return { ...state, inte: state.inte + question.score };
  //         });
  //       }
  //       default:
  //         return null;
  //     }
  //   });
  // }, []);
  return (
    <Container>
      <p>Linguistics - {score.ling}</p>
      <p>Musical - {score.musi}</p>
      <p>Logic & Math - {score.letm}</p>
      <p>Spatial - {score.spat}</p>
      <p>Bodily & Kinesthetic - {score.betk}</p>
      <p>Intrapersonal - {score.intr}</p>
      <p>Interpersonal - {score.inte}</p>
      <p>Naturalist - {score.natu}</p>
      <br />
      {score.ling >= 25 && (<p>You have shown a preferential aptitude in: Linguistic category with a score of {score.ling}</p>)}
      {score.musi >= 25 && (<p>You have shown a preferential aptitude in: Musical category with a score of {score.musi}</p>)}
      {score.letm >= 25 && (<p>You have shown a preferential aptitude in: Logic and Math category with a score of {score.letm}</p>)}
      {score.spat >= 25 && (<p>You have shown a preferential aptitude in: Spatial category with a score of {score.spat}</p>)}
      {score.betk >= 25 && (<p>You have shown a preferential aptitude in: Bodily and Kinesthetic category with a score of {score.betk}</p>)}
      {score.intr >= 25 && (<p>You have shown a preferential aptitude in: Intrapersonal category with a score of {score.intr}</p>)}
      {score.inte >= 25 && (<p>You have shown a preferential aptitude in: Interpersonal category with a score of {score.inte}</p>)}
      {score.natu >= 25 && (<p>You have shown a preferential aptitude in: Naturalist category with a score of {score.natu}</p>)}
    </Container>
  );
};

export default Results;
