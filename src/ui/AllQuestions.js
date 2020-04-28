import React from 'react';

export default ({ questions }) => {
    // console.log('aq', questions)
    const questionsList = questions.map(({ question, options },i) => (
        <div className="inline fields">
            <label htmlFor={i}>{question}</label>
            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" name={i} value={options[0].id} tabIndex="0" className="hidden" />
                    <label>{options[0].text}</label>
                </div>
            </div>
            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" name={i} value={options[1].id}tabIndex="0" className="hidden" />
                    <label>{options[1].text}</label>
                </div>
            </div>
            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" name={i} value={options[2].id}tabIndex="0" className="hidden" />
                    <label>{options[2].text}</label>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="Questions">{questionsList}</div>
    );
}