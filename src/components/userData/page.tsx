import '../../../_styles.scss'
import './style.scss'
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { checkToken } from '@/utils/verify-jwt';
import http from '@/http';
import EditInput from '../EditInput/page';
// import EditModal from '../EditModal/page';
import Modal from '../EditModal/page';
import InputForm from '../InputForm/InputForm';
import ButtonProductId from '../Buttons/ButtonProductId';
import styled from 'styled-components';
interface userProps {
    email: string;
    name: string;
    address: string;
    cellNumber: string;
    cpf: string;
}
const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
function UserData() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editingType, setEditingType] = useState<string>('');
    const [newEmail, setNewEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newName, setNewName] = useState<string>('');
    const [newAddress, setNewAddress] = useState<string>('');
    const [newCellNumber, setNewCellNumber] = useState<string>('');
    const [spanVisible, setSpanVisible] = useState<boolean>(false);
    const [user, setUser] = useState<userProps>({
        email: '',
        name: '',
        address: '',
        cellNumber: '',
        cpf: ''
    });
    const [userId, setUserId] = useState('');

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

    const updateUserData = async (userId: string, key: string, value: string) => {
        const cookies = parseCookies();
        const token = cookies.token;
        // Verifica se o token de autenticação está disponível nos cookies
        if (!token) {
            console.error('Token de autenticação não encontrado');
            return;
        }
        // Configuração para a requisição PUT com o token de autenticação no cabeçalho
        const config: any = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            // Construa o objeto de dados que será enviado na requisição PUT
            const updateData = {
                [key]: value
            };

            // Faça a requisição PUT para atualizar os dados do usuário
            const res = await http.put(`/users/${userId}`, updateData, config); // Substitua '/users' pela rota correta da sua API

            // Verifique se a requisição foi bem-sucedida
            if (res.status === 200) {
                // Dados do usuário foram atualizados com sucesso
                console.log('Dados do usuário atualizados com sucesso!');
                setSpanVisible(true)
            } else {
                // Trate possíveis erros, como falha na atualização dos dados
                console.error('Falha ao atualizar os dados do usuário');
            }
        } catch (error) {
            // Trate erros de requisição, como erro de rede ou falha no servidor
            console.error('Erro ao realizar a requisição PUT:', error);
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
                        setUserId(payload.sub);
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
    const handleModalToggle = (type: string) => {
        setOpenModal(!openModal);
        setEditingType(type);
    };
    return (
        <section className="container-option">
            <div className="container-content content-center">
                <section className='sec-inpus-edits'>
                    <EditInput
                        label='Email'
                        value={user.email}
                        isDisable={true}
                        type="email"
                        name='Email'
                        onModalToggle={() => handleModalToggle('email')}
                    />

                    <EditInput
                        label='************'
                        isDisable={true}
                        type="password"
                        name='Senha'
                        onModalToggle={() => handleModalToggle('password')}
                    />

                    <EditInput
                        label='Nome'
                        value={user.name}
                        isDisable={true}
                        type="text"
                        name='Nome'
                        onModalToggle={() => handleModalToggle('name')}
                    />

                    <EditInput
                        label={user.address !== '' ? user.address : "adicione um endereço"}
                        value={user.address}
                        isDisable={true}
                        type="text"
                        name='Endereço'
                        onModalToggle={() => handleModalToggle('address')}
                    />

                    <EditInput
                        label={user.cellNumber !== '' ? user.cellNumber : 'Adicione um número de celular'}
                        value={user.cellNumber}
                        isDisable={true}
                        type="text"
                        name='Celular'
                        onModalToggle={() => handleModalToggle('cellNumber')}
                    />

                    <EditInput
                        label="CPF"
                        value={user.cpf}
                        isDisable={true}
                        type="text"
                        name='CPF'
                    />
                </section>
            </div>

            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                {editingType === 'email' && (
                    <DivModal>
                        <h2>Editar Email</h2>
                        {spanVisible && (
                            <span>Usuário atualizado !</span>
                        )}
                        <InputForm
                            label='Novo email'
                            type='email'
                            name='Email' />

                        <InputForm
                            label='Confirme o novo email'
                            type='email'
                            name='Email'
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                        />

                        <ButtonProductId
                            action="Salvar"
                            onClick={() => updateUserData(userId, 'email', newEmail)}
                            color='green'
                            margin='margin-1rem' />
                    </DivModal>
                )}
                {editingType === 'password' && (
                    <DivModal>
                        <h2>Editar senha</h2>
                        {spanVisible && (
                            <span>Usuário atualizado !</span>
                        )}
                        <InputForm
                            label='Nova senha'
                            type='password'
                            name='senha' />
                        <InputForm
                            label='Confirme a nova senha'
                            type='password'
                            name='senha'
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                        />
                        <ButtonProductId
                            onClick={() => updateUserData(userId, 'password', newPassword)}
                            action="Salvar"
                            color='green'
                            margin='margin-1rem' />
                    </DivModal>
                )}

                {editingType === 'name' && (
                    <DivModal>
                        <h2>Editar nome</h2>
                        {spanVisible && (
                            <span>Usuário atualizado !</span>
                        )}
                        <InputForm
                            label='Novo nome'
                            type='text'
                            name='nome'
                        />
                        <InputForm
                            label='Confirme o nome'
                            type='text'
                            name='nome'
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}

                        />
                        <ButtonProductId
                            onClick={() => updateUserData(userId, 'name', newName)}
                            action="Salvar"
                            color='green'
                            margin='margin-1rem' />
                    </DivModal>
                )}

                {editingType === 'address' && (
                    <DivModal>
                        <h2>Editar endereço</h2>
                        {spanVisible && (
                            <span>Usuário atualizado !</span>
                        )}
                        <InputForm
                            label='Novo endereço'
                            type='text'
                            name='endereço' />
                        <InputForm
                            label='Confirme o endereço'
                            type='text'
                            name='endereço'
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setNewAddress(e.target.value)}
                        />
                        <ButtonProductId
                            onClick={() => updateUserData(userId, 'address', newAddress)}
                            action="Salvar"
                            color='green'
                            margin='margin-1rem' />
                    </DivModal>
                )}
                {editingType === 'cellNumber' && (
                    <DivModal>
                        <h2>Editar celular</h2>
                        {spanVisible && (
                            <span>Usuário atualizado !</span>
                        )}
                        <InputForm
                            label='Novo número'
                            type='text'
                            name='cellNumber' />
                        <InputForm
                            label='Confirme o número'
                            type='text'
                            name='cellNumber'
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setNewCellNumber(e.target.value)}
                        />
                        <ButtonProductId
                            onClick={() => updateUserData(userId, 'cellNumber', newCellNumber)}
                            action="Salvar"
                            color='green'
                            margin='margin-1rem' />
                    </DivModal>
                )}
            </Modal>
        </section>
    )
}
export default UserData;