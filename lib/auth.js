import { hash } from 'bcryptjs'

export async function hashPasword(password) {
    const hashedPassword = hash(password, 12)
    return hashedPassword
}