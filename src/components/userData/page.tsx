import '../../../_styles.scss'
import './style.scss'
import InputForm from '../InputForm/InputForm';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { checkToken } from '@/utils/verify-jwt';
import http from '@/http';
function UserData() {
    const [user, setUser] = useState({});
    async function getUserData(id: string | any, token: string | any) {
        const config: any = {
            headers: { Authorization: `Bearer ${token}` }
        }; // Alterado o tipo para any
        try {
            const res = await http.get(`/users/${id}`, config); // Corrigido o caminho da rota
            return res.data.user // Supondo que res.data contenha os dados do usuário
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        const fetchUserData = async () => {
            if (token) {
                const payload = checkToken(token);
                if (payload && typeof payload === 'object' && 'sub' in payload && typeof payload.sub === 'string') {
                    try {
                        const user = await getUserData(payload.sub, token);
                        setUser(user);
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        };
    
        fetchUserData();
    }, [])
    const handdleInput = ((e: any) => {
        console.log(e)
    })
    console.log(user.address)
    return (
        <section className="container-option">
            <div className="container-content">
                <section className='sec-inpus-edits'>
                    <div className='div-input-edit'>
                        <InputForm label="Email" value={user.email} isDisable={true} type="email"  name='email' onBlur={handdleInput}/>
                        <button className='btn-act-edit'>Editar</button>
                    </div>
                    <div className='div-input-edit'>
                        <InputForm label="************" type="password" isDisable={true} name='password' onBlur={handdleInput}/>
                        <button className='btn-act-edit'>Editar</button>
                    </div>
                    <div className='div-input-edit'>
                        <InputForm label="Nome" type="text" value={user.name} isDisable={true} name='endereco' onBlur={handdleInput}/>
                        <button className='btn-act-edit'>Editar</button>
                    </div>
                    <div className='div-input-edit'>
                        <InputForm label={user.address != '' ? user.address : "adicione um endereço"}  type="text" value={user.address} isDisable={true} name='endereco' onBlur={handdleInput}/>
                        <button className='btn-act-edit'>Editar</button>
                    </div>
                    <div className='div-input-edit'>
                        <InputForm label={user.cellNumber != '' ? user.cellNumber : 'Adicione um número de celular'} value={user.cellNumber} type="text" isDisable={true} name='celular' onBlur={handdleInput}/>
                        <button className='btn-act-edit'>Editar</button>
                    </div>
                    <div className='div-input-edit'>
                        <InputForm label="CPF" type="text" value={user.cpf} name='cpf' onBlur={handdleInput} isDisable={true}/>
                        <button disabled className='btn-act-edit'>Editar</button>

                    </div>
                </section>
            </div>
        </section>
    )
}
export default UserData;