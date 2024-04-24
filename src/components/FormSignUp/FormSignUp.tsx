"use client"
import Link from "next/link";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonProductId from "../Buttons/ButtonProductId";
import "../FormLogin/style.scss"
import { useState } from "react";
import http from "@/http";

function FormSignUp() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [bithDay, setBirthDay] = useState<string>('');
    const formatCPF = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
    const formatDate = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1');
    }
    const handleChange = (e: any) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;
        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'cpf') {
            setCpf(formatCPF(value))
        } else if (name === 'phone') {
            setPhone(value)
        } else if (name === 'birthDay') {
            setBirthDay(formatDate(value))
        }
    }
    console.log(cpf)
    const createUser = () => {
        const userData = {
            "name": name,
            "email": email,
            "password": password,
            "cpf": cpf,
            "cellNumber": phone,
            "address": "",
            "dateBirthday": bithDay,
            "userType": "user"
        }
        http.post('/users', userData)
        .then((response) => {
            console.log(response)
            window.location.href = '/conta';
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <SectionTitle title="Criar conta" />
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Nome" name="name" type="text" onBlur={handleChange}/>
                            <InputForm label="Email" name="email" type="email" onBlur={handleChange}/>
                            <InputForm label="Senha" name="password" type="password" onBlur={handleChange}/>
                            <InputForm label="CPF" name="cpf" type="text" onBlur={handleChange}/>
                            <InputForm label="Telefone" name="phone" type="text" onBlur={handleChange}/>
                            <InputForm label="Data de nascimento" name="birthDay" type="text" onBlur={handleChange}/>
                        </div>
                        <div className="div-optionsLogin">
                            <Link href={"/login"}>Fazer login</Link>
                        </div>
                        <div className="div-loginBtn">
                            <ButtonProductId action="Criar conta" color="green" onClick={()=>createUser()} type="submit"/>
                        </div>

                    </form>
                </div>
            </section>

        </>
    )
}
export default FormSignUp;