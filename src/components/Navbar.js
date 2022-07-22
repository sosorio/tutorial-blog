import * as React from 'react';
//import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div class="flex justify-between items-center text-2xl h-18 max-w-[1240px] mx-2 px-2" >
            <h1 class="w-full text-3xl font-bold">FloresHoy</h1>
            <ul class="flex">
                <li class="p-3">Cumpleaños</li>
                <li class="p-3">Aniversario</li>
                <li class="p-3">Amor</li>
                <li class="p-3">Agradecimiento</li>
                <li class="p-3">Condolencia</li>
                <li class="p-3">3006000664</li>
            </ul>
        </div>
    )
}


export default Navbar