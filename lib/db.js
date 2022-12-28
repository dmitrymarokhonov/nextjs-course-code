import { MongoClient } from "mongodb"

export async function connectionToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://dmitry:hiOFo0MDYCLilIcr@dmitry-cluster.w8kyaoi.mongodb.net/auth-demo?retryWrites=true&w=majority')
    return client
}    