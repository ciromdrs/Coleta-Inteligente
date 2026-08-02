'use client'

import { ChangeEvent, ChangeEventHandler, useState } from "react"

export default function Page() {
    const [motorista, setMotorista] = useState('nada')
    const motoristas = [
        {id: 1, nome: "Rubens"},
        {id: 2, nome: "Junior"},
        {id: 3, nome: "Adailton"}
    ]
    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setMotorista(event.target.value)
    }
    return (
        <div className="p-12 w-full h-screen">
            <form action="" className="flex flex-col bg-background2 flex-wrap h-full text-3xl rounded-xl p-4 justify-between">
                <div className="flex flex-col gap-6">
                <input type="text" name="" id="" placeholder="Placa..." className="p-3 bg-background3 rounded-full"/>
                <select name="" id="" value={motorista} onChange={changeHandler} className="p-3 bg-background3 rounded-full">
                    <option value="nada" disabled>-- Selecione O Motorista --</option>
                    {motoristas.map((el, ind) => (
                        <option key={el.id} value={`${el.id}`}>{el.nome}</option>
                    ))}
                </select>
                </div>
                <div className="opacity-70 flex flex-col items-end">
                    <div className="flex items-center justify-center rounded-full hover:cursor-pointer text-5xl bg-green-600 p-8 w-9 h-9 ">✓</div>
                </div>
            </form>
        </div>
    )
}