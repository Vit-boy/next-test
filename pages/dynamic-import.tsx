import { useState } from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']
const searchArr = [
    {
        title: "Old Man's War",
        author: 'John Scalzi',
        tags: ['fiction'],
    },
    {
        title: 'The Lock Artist',
        author: 'Steve',
        tags: ['thriller'],
    },
]
const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['author', 'tags'],
}

const DynamicImport = () => {
    const [results, setResults] = useState([{}])

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={async (e) => {
                    const { value } = e.currentTarget
                    const Fuse = (await import('fuse.js')).default
                    const fuse = new Fuse(names)
                    const fuseArr = new Fuse(searchArr, options)

                    setResults(fuse.search(value))
                    console.log(fuseArr.search(value))
                }}
            />
            <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
    )
}

export default DynamicImport
