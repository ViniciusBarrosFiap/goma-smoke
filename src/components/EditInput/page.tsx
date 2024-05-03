import React from 'react';
import InputForm from "../InputForm/InputForm";
import './style.scss';

interface EditInputProps {
    label: string;
    type: string;
    name: string;
    isDisable?: boolean;
    value?: string;
    onModalToggle?: () => void;
    editingType?: string;
}

function EditInput({ label, type, name, isDisable, value, onModalToggle, editingType }: EditInputProps) {
    return (
        <div className='div-input-edit'>
            <h4>{`${name} :`}</h4>
            <div className="div-input-btn">
                <InputForm label={label} value={value} isDisable={isDisable} type={type} name={name} />
                <button className='btn-act-edit' onClick={onModalToggle}>Editar</button>
            </div>
        </div>
    )
}

export default EditInput;
