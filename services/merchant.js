
import { merchant } from "../db.ts"
export async function create(payload) {
    return await merchant.insert(payload)
}

export async function update(payload) { 
    return await merchant.updateOne({email: payload.email}, { $set: payload })
}

export async function getId({email, password}) { 
    const res = await merchant.findOne({email: email}) 
    return res._id
}