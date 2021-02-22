import { useRouter } from 'next/router'

const Slug = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    return (
        <>
            <h1>Slug: {slug}</h1>
        </>
    )
}

export default Slug
