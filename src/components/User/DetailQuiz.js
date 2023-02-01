import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../services/apiService";
import './DetailQuiz.scss';

const DetailQuiz = (props) => {
    // const [quiz, setQuiz] = useState([]);

    // const location = useLocation();
    const params = useParams();

    // let { email } = location.state;
    // console.log(email);

    console.log(params);

    const quizId = params.id;

    useEffect(() => {
        fetchQuestions();
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log(res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if(index === 0 ){
                            questionDescription = item.description;
                            image = item.image
                        }
                        answers.push(item.answers);
                        console.log('item answer',item);
                    })
                    return { question: key, answers, questionDescription,image }
                })
                .value();
        }


    }

    return (
        <Container className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    acvv
                </div>
                <div className="question-body">
                    <img/>
                </div>
                <div className="question-conten"></div> 
            </div>
            <div className="right-content">
                count down
            </div>
        </Container>
    )
}

export default DetailQuiz;