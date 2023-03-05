import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getQuizByUser } from "../services/apiService";
import './ListQuiz.scss';

const ListQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        console.log(res);
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }
    return (
        <Container className="list-quiz-container">
            {listQuiz && listQuiz.length > 0 && listQuiz.map((quiz,index) => {
                return (
                    <Card key={`${index}-quiz`} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`data:image/png;base64,${quiz.image}`} />
                        <Card.Body>
                            <Card.Title>Quiz {index+1}</Card.Title>
                            <Card.Text>
                            {quiz.description}
                            </Card.Text>
                            <Button variant="primary" onClick={()=> navigate(`/quiz/${quiz.id}`,{ state: { quizTitle: quiz.description} })}>Start Now</Button>
                        </Card.Body>
                    </Card>
                )
            })}
            {listQuiz && listQuiz.length === 0 && <p>You don't have any quiz now ... </p> }
        </Container>
    )
}

export default ListQuiz;