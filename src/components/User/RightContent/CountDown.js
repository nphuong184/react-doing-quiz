import { useState, useEffect } from 'react';
import './Content.scss'

const CountDown = (props) => {

    const [duration, setDuration] = useState(300);

    useEffect(() => {

        if (duration === 0) {
            props.onTimeUp();
            return
        };

        const timer = setInterval(() => {
            setDuration(duration - 1);
        }, 1000)

        // giai đoạn clean up: để đảm bảo giữa các lần render sẽ không liên quan gì đến nhau
        return () => {
            clearInterval(timer)
        }
    }, [duration])

    // js format text second to time
    const toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    return (
        <>
            <div className='main-timer'>
                {toHHMMSS(duration)}
            </div>
        </>
    )
}
export default CountDown;