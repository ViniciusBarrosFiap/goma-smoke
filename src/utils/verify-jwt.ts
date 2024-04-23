import jwt from 'jsonwebtoken'
export const checkToken = (token: string) => {
    try {
        const decoded = jwt.decode(token);
        return decoded
    }catch (error) {
        console.log('Erro ao decodificar o token', error)
    }
}