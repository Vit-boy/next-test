import dynamic from 'next/dynamic'

const DynamicHello1 = dynamic(() => import('@/components/Hello/Hello1'))
const DynamicHello2 = dynamic(() => import('@/components/Hello/Hello2'), {
    loading: () => <p>...</p>,
})
const DynamicHello3 = dynamic(() => import('@/components/Hello/Hello3'), {
    loading: () => <p>Loading ...</p>,
    ssr: false,
})

const DynamicComponnet = () => {
    return (
        <div>
            <DynamicHello1 />
            <DynamicHello2 />
            <DynamicHello3 />
            <p>HOME PAGE is here!</p>
        </div>
    )
}

export default DynamicComponnet
