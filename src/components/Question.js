import React, { useState, useEffect, useRef } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Por favor selecione uma alternativa!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 className="mb-5">{data.question}</h3>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="label-question" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button-next mt-4" onClick={nextClickHandler}>Próximo</button>
        </div>
      </div>
    </div>
  );
}

export default Question;