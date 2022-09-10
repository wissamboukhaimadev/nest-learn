import * as bcrypt from 'bcrypt'

export function encryptPassword(rawPassword: string){
    const SALT=bcrypt.genSaltSync()
    return bcrypt.hashSync(rawPassword, SALT)
}

export function compareHashs(rawPassword:string, hash:string){
    return bcrypt.compareSync(rawPassword, hash)
}