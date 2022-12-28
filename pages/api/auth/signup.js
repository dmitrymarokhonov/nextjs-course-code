import { connectionToDatabase } from '../../../lib/db'
import { hashPasword } from '../../../lib/auth'

export default async function handler(req, res) {

    const data = req.body

    const { email, password } = data

    if (!email || !email.includes('@') || !password || password.trim(' ').length < 7) {
        res.status(422).json({ message: 'Invalid input - password should be at least 7 characters long.' })
        return
    }

    const client = await connectionToDatabase()
    const db = client.db()
    const hashedPassword = await hashPasword(password)

    const result = db.collection('users').insertOne({
        email: email,
        password: hashedPassword
    })

    res.status(201).json({ message: 'Created user.' })
}    