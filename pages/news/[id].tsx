import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { people } from '../../types'

type Props = {
    post: people
}

// TODO: 需要获取 `posts`（通过调用 API ）
//       在此页面被预渲染之前
function News(props: Props) {
    const { post } = props
    const router = useRouter()
    const { id } = router.query
    return (
        <table>
            <tr>
                <td>News id:</td>
                <td>{id}</td>
            </tr>
            <tr>
                <td>name:</td>
                <td>{post.name}</td>
            </tr>
            <tr>
                <td>height:</td>
                <td>{post.height}</td>
            </tr>
            <tr>
                <td>mass:</td>
                <td>{post.mass}</td>
            </tr>
            <tr>
                <td>hair_color:</td>
                <td>{post.hair_color}</td>
            </tr>
            <tr>
                <td>skin_color:</td>
                <td>{post.skin_color}</td>
            </tr>
            <tr>
                <td>eye_color:</td>
                <td>{post.eye_color}</td>
            </tr>
            <tr>
                <td>gender:</td>
                <td>{post.gender}</td>
            </tr>
        </table>
    )
}

// 此函数在构建时被调用
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://127.0.0.1:8080/api/news/')
    const posts = await res.json()

    const paths = posts.map((post: people) => `/news/${post.id}`)

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://127.0.0.1:8080/api/news/${params?.id}`)
    const post = await res.json()

    return { props: { post } }
}

export default News
