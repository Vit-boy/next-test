import { GetServerSideProps } from 'next'
import { peoples, people } from '../types'

type Props = {
    data: peoples
}

function Server(props: Props) {
    const { data } = props
    return (
        <ul>
            {data.map((post: people, index: number) => (
                <li key={index}>{post.name}</li>
            ))}
        </ul>
    )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch('http://127.0.0.1:8080/api/news/')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Server
