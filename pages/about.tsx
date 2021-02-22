// import { useState } from 'react'
// import Datetime from 'react-datetime'
// import 'react-datetime/css/react-datetime.css'
// import PickyDateTime from 'react-picky-date-time'
// import '../styles/react-picky-date-time.min.css'

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";

// import Calendar from 'rc-calendar'
import Image from 'next/image'

function About() {
    // const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            {/* <div>About</div> */}
            {/* <Datetime input={false} /> */}
            {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            /> */}
            {/* <PickyDateTime /> */}
            {/* <Calendar /> */}
            <div style={{ width: '500px', height: '1500px' }}>图片在下面</div>
            <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                <Image
                    src="/img.jpeg"
                    alt="Picture of the author"
                    layout="fill"
                    loading="lazy"
                    objectFit="contain"
                />
            </div>
            <div style={{ width: '100%', position: 'relative' }}>
                <Image
                    src="/mainvisual.jpg"
                    alt="Picture of the author"
                    layout="responsive"
                    loading="lazy"
                    width={750}
                    height={400}
                />
            </div>
        </>
    )
}

export default About
