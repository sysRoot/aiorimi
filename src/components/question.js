import React from "react";

import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { BatteryContext } from "../contexts";
import { Link, useParams, useHistory } from "react-router-dom";

const Question = () => {
  const params = useParams();
  const history = useHistory();
  const id = params.id || 1;
  // console.log('this is the id', id);
  const { questionSet, setAnswers } = React.useContext(BatteryContext);

  const changeScoreHandler = (e) => {
    e.persist();
    e.preventDefault();
    setAnswers((state) => {
      return [...state, (state[id - 1].score = parseInt(e.target.value))];
    });
    if (parseInt(id) === 56) {
      history.push(`/results`)
    } else {
      history.push(`/question/${parseInt(id) + 1}`);
    }
  };

  return (
    <Container>
      <main>
        <p>
          {questionSet[id - 1].question} - ({questionSet[id - 1].type})
        </p>
        <p>
          Rarely (1) Occasionally (2) Sometimes (3) Usually (4) Almost Always
          (5)
        </p>
        <Form>
          <FormGroup>
            <Label for="selectScore">Select</Label>
            <Input
              type="select"
              name="score"
              id="selectScore"
              value={parseInt(questionSet[id - 1].score)}
              onChange={(e) => changeScoreHandler(e)}
            >
              <option>Please select a score</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Input>
          </FormGroup>
        </Form>
        <div className="aioriofmi-btns">
          {parseInt(id) !== 1 && (
            <Link to={`/question/${parseInt(id) - 1}`}>
              <p>Go back</p>
            </Link>
          )}
          {parseInt(id) !== 56 && (
            <Link to={`/question/${parseInt(id) + 1}`}>
              <p>Go forward</p>
            </Link>
          )}
          {parseInt(id) === 56 && (
            <Link to={`/results`}>
              <p>Results</p>
            </Link>
          )}
        </div>
      </main>
    </Container>
  );
};

export default Question;
