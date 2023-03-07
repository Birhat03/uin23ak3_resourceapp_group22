import React from 'react';
import { useState } from "react";
import HandleSources from './Resources';
import Header from './Header';

export default function Layout() {
    const [HTML, setState] = useState("HTML")

    function StateSource(SourceStated) {
        setState(SourceStated)
        const btn = document.getElementById(SourceStated)
        const HTMLbtn = document.getElementById("HTML")
        const CSSbtn = document.getElementById("CSS")
        const JSbtn = document.getElementById("JavaScript")
        const ReactBtn = document.getElementById("React")
        const SanityBtn = document.getElementById("Sanity")
        btn.classList.add("active")
        HTMLbtn.classList.remove("active")
        btn.classList.add("active")
        CSSbtn.classList.remove("active")
        btn.classList.add("active")
        JSbtn.classList.remove("active")
        btn.classList.add("active")
        ReactBtn.classList.remove("active")
        btn.classList.add("active")
        SanityBtn.classList.remove("active")
        btn.classList.add("active")
        

    }
    

    return(
        <>
        <Header header={"Ressursarkiv"}></Header>
        <nav>
        <button id="HTML" className='btn active' onClick={() => StateSource('HTML')}>HTML</button>
        <button id="CSS" className='btn' onClick={() => StateSource('CSS')}>CSS</button>
        <button id="JavaScript"  className='btn'onClick={() => StateSource('JavaScript')}>JavaScript</button>
        <button id="React" className='btn' onClick={() => StateSource('React')}>React</button>
        <button id="Sanity" className='btn' onClick={() => StateSource('Sanity')}>Sanity & headless CMS</button>
        </nav>
        <section>
           <HandleSources name={HTML}/>
        </section>
        </>
    )
}
