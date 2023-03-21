import './Content.scss';
import CountDown from './CountDown';

const RightContent = (props) => {
    const { data } = props;
    console.log(data);

    const onTimeUp = () =>{
        props.handleNFinish();
    }

    return (
        <>
            <CountDown onTimeUp={onTimeUp}/>
            <div className='main-question'>
                {data && data.length > 0 && data.map((item, index) => {
                    return (<div className='question' key={`question-${index}`}>{index + 1}</div>)
                })}
            </div>
        </>
    )
}

export default RightContent;