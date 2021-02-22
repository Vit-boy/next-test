import { people } from '../../../data'

export default function handler(req, res) {
    setTimeout(() => {
        res.status(200).json(people)
    }, 5000)
}
