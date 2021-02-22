import { GetStaticProps } from 'next'
import { blogs, blog } from '../types'

type Props = {
    posts: blogs
}

// TODO: 需要获取 `posts`（通过调用 API ）
//       在此页面被预渲染之前
function Blog(props: Props) {
    const { posts } = props
    return (
        <ul>
            {posts.map((post: blog, index: number) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    )
}

// 此函数在构建时被调用
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.BFF_API_BASE_URI}/api/blob`)
    const posts = await res.json()

    // 通过返回 { props: posts } 对象，Blog 模块
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            posts,
        },
        revalidate: 1,
    }
}

export default Blog
