import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
    const [nav, setNav] = React.useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div class="flex justify-between items-center text-2xl h-24 max-w-[1240px] mx-2 px-2" >
            <h1 class="w-full text-3xl font-bold valign"><StaticImage src="../images/logo-floresHoy.png"
     alt="logo" height={40}  /> FloresHoy</h1>
            <ul class="hidden md:flex">
                <li class="p-3">Cumpleaños</li>
                <li class="p-3">Aniversario</li>
                <li class="p-3">Amor</li>
                <li class="p-3">Agradecimiento</li>
                <li class="p-3">Condolencia</li>
                <li class="p-3">Contactenos</li>
                </ul>
        
        <div onClick={handleNav} class="block md:hidden">
            {!nav ? 'X' : <StaticImage src="../images/bars-solid.svg"
     alt="Menu" height={50} />}</div>
     


     <div class={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white m-4 ease-in-out duration-500" : "fixed left-[-100%]"}>
     <h1 class="w-full text-3xl font-bold pb-4"><StaticImage src="../images/logo-floresHoy.png"
     alt="logo" height={40}  /> FloresHoy</h1>
     <StaticImage src="../images/bars-solid.svg"
     alt="Menu" height={50}  />
        <ul class="pt-4">
        <li class="p-3 border-b">Cumpleaños</li>
                <li class="p-3 border-b">Aniversario</li>
                <li class="p-3 border-b">Amor</li>
                <li class="p-3 border-b">Agradecimiento</li>
                <li class="p-3 border-b">Condolencia</li>
                <li class="p-3 border-b">Contactenos</li>  
        </ul>
     </div>
        </div>
    )
}


export default Navbar