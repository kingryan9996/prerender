import data from '../data.json';
export default function handler(req, res) {
    const name = req.query.name;
    res.status(200).json(data.photo.filter(obj => obj.name == name))
}
