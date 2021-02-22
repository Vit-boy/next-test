import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { people } from '../../types'

type Props = {
    post: people
}

function Fallback(props: Props) {
    const { post } = props
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    } else {
        return <div>{post.gender}</div>
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://127.0.0.1:8080/api/news/${params?.id}`)
    const post = await res.json()

    return { props: { post }, revalidate: 1 }
}

export default Fallback
