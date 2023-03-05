import _ from "lodash"

const Question = (props) => {
    const { data, index, handleCheckbox } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }

    const handleHanleCheckbox = (e, answerId, questionId) => {
        let isChecked = e.target.checked;
        console.log('data props', answerId, questionId);
        handleCheckbox(answerId, questionId);
    }

    return (
        <>
            <div className="question">Cau hoi {index + 1}: {data.questionDescription}?</div>

            <div className="question-body">
                {data.image &&
                    <div className="img-q" >
                        <img src={`data:image/png;base64,${data.image}`} />
                    </div>
                }
                <div className="answer">
                    {data.answers && data.answers.length && data.answers.map((answer, index) => {
                        return (
                            <div key={`answers-${index}`} className="answer-child">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox"
                                        onChange={(e) => handleHanleCheckbox(e, answer.id, data.question)}
                                        // xét isSelected dựa vào state của react
                                        checked={answer.isSelected}
                                    />
                                    <label className="form-check-label">
                                        {answer.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Question;