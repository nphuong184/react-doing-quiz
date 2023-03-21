import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../services/apiService";
import './DetailQuiz.scss';
import _ from 'lodash';
import Question from "./Question";
import ModelResult from "./ModelResult";
import RightContent from "./RightContent/Content";

const DetailQuiz = (props) => {
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0) //current question

    const location = useLocation();
    const params = useParams();

    const quizId = params.id;

    const [isShowModelResult, setIsShowModelResult] = useState(false);
    const [dataModelResult, setDataModelResult] = useState({})

    useEffect(() => {
        fetchQuestions();
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image
                        }
                        // tạo biến isSelected = false để check xem đáp án có check chưa
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                    })
                    return { question: key, answers, questionDescription, image }
                })
                .value();
            setDataQuiz(data);
        }
    }

    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1)

    }

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1)
        }
    }

    // xét câu trả lời đã selected chưa ==> 
    // ==> check lại array answers, ktra xem đang check vào answer nào và đang click vào question nào
    // tạo 1 mảng clone từ mảng dataQuiz 
    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        // find item có id question = questionId truyền từ Question qua nếu ko tìm được thì trả về undefind
        let question = dataQuizClone.find(item =>
            // + ==> để cùng kiểu dữ liệu 
            +item.question === +questionId
        );
        // 
        if (question, question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected
                }
                return item;
            });
        }
        // hàm findIndex đúng trả về giá trị, sai gtri trả về = -1
        let index = dataQuizClone.findIndex(item => +item.question === +questionId);

        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
        console.log('dataQuiz 3', dataQuiz);
    }

    const handleNFinish = async () => {
        // data be tra ve {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        console.log('check data before', dataQuiz);

        let payload = {
            quizId: +quizId,
            answers: [],
        }

        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = question.question;
                let userAnswerId = [];

                // todo
                question.answers.forEach(a => {
                    if (a.isSelected) {
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })

            payload.answers = answers;
            console.log('check data after', payload);

            // submit api
            let res = await postSubmitQuiz(payload);
            console.log('check res: ', res);

            if (res && res.EC === 0) {
                setDataModelResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                })
                console.log('setDataModelResult',res.DT.countCorrect);
                setIsShowModelResult(true);
            } else {
                alert('something wrongs')
            }

        }
    }

    console.log(dataQuiz);

    return (
        <Container className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location.state.quizTitle}
                </div>
                <hr></hr>
                <div className="question-content">
                    <Question
                        index={index}
                        handleCheckbox={handleCheckbox}
                        data={
                            dataQuiz && dataQuiz.length > 0
                                ? dataQuiz[index]
                                : []} />
                </div>
                <div className="footer">
                    <Button variant="primary" onClick={() => handlePrev()}>Prev</Button>
                    <Button variant="secondary" onClick={() => handleNext()}>Next</Button>
                    <Button variant="warning" onClick={() => handleNFinish()}>Finish</Button>
                </div>
            </div>
            <div className="right-content">
                <RightContent
                    data={dataQuiz} 
                    handleNFinish={handleNFinish}/>
            </div>
            <ModelResult
                show={isShowModelResult}
                setShow={setIsShowModelResult}
                dataModelResult={dataModelResult}
            />
        </Container>
    )
}

export default DetailQuiz;