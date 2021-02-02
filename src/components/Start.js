import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Começar Quiz</h1>
          <p>Boa sorte</p>
          <button className="button-primario" onClick={onQuizStart}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;