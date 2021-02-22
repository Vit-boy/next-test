const data = [
    {
        title: 'title1',
    },
    {
        title: 'title2',
    },
    {
        title: 'title3',
    },
    {
        title: 'title4',
    },
    {
        title: 'title5',
    },
    {
        title: 'title6',
    },
    {
        title: 'title7',
    },
]

export default function handler(req, res) {
    res.status(200).json(data)
}
