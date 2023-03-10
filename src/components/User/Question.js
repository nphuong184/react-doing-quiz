import _ from "lodash";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Question = (props) => {
    const { data, index, handleCheckbox } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }

    const handleHanleCheckbox = (e, answerId, questionId) => {
        let isChecked = e.target.checked;
        handleCheckbox(answerId, questionId);
    }

    return (
        <>
            <div className="question">Cau hoi {index + 1}: {data.questionDescription}?</div>

            <div className="question-body">
                {data.image &&
                    <div className="img-q" >
                        {/* <Zoom>
                            <img className="dddd"
                                src={`data:image/png;base64,${data.image}`} 
                            />
                        </Zoom> */}
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