import './Content.scss';

const RightContent = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <>
            <div className='main-timer'>
                10:10
            </div>
            <div className='main-question'>
                {data && data.length > 0 && data.map((item, index) => {
                    return (<div className='question' key={`question-${index}`}>{index + 1}</div>)
                })}
            </div>
        </>
    )
}

export default RightContent;