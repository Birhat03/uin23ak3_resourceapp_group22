import resources from '../resources'

export default function Resources(){
    const HTMLresources = resources.filter((html) => html.category === "HTML")

    const CSSresources = resources.filter((css) => css.category === "CSS")
    
    const JSresources = resources.filter((js) => js.category === "JavaScript")
    
    const ReactResources = resources.filter((react) => react.category === "React")
    
    const SanityResources = resources.filter((sanity) => sanity.category === "Sanity and headless CMS")
    
    const menu = document.getElementById("menu")
    const HTMLbtn = document.getElementById("HTMLbtn")
    const CSSbtn = document.getElementById("CSSbtn")
    const JSbtn = document.getElementById("JSbtn")
    const ReactBtn = document.getElementById("ReactBtn")
    const SanityBtn = document.getElementById("SanityBtn")
    
    
    HTMLbtn.classList.add("active");
    
    function HTMLmap(){
    
        HTMLresources.map((html) => {
            
            let links = ``;
            html.sources.map((link) => {
                links += `
                <li><a target="blank" href="${link.url}">${link.title}</a></li>
                `;
            });
    
            menu.innerHTML = `
        <h2>${html.category}</h2>
        <p>${html.text}</p>
        <ul>
            ${links}
        </ul>
        
        `})
    
        HTMLbtn.classList.add("active");
    
        CSSbtn.classList.remove("active");
        JSbtn.classList.remove("active");
        ReactBtn.classList.remove("active");
        SanityBtn.classList.remove("active");
    
    }
    
    
    function CSSmap(){
    
        CSSresources.map((css) => {
            
            let links = ``;
            css.sources.map((link) => {
                links += `
                <li><a target="blank" href="${link.url}">${link.title}</a></li>
                `;
            });
    
            menu.innerHTML = `
        <h2>${css.category}</h2>
        <p>${css.text}</p>
        <ul>
            ${links}
        </ul>
        
        `})
    
        CSSbtn.classList.add("active");
    
        HTMLbtn.classList.remove("active");
        JSbtn.classList.remove("active");
        ReactBtn.classList.remove("active");
        SanityBtn.classList.remove("active");
    }
    
    
    function JSmap(){
        JSresources.map((js) => {
            
            let links = ``;
            js.sources.map((link) => {
                links += `
                <li><a target="blank" href="${link.url}">${link.title}</a></li>
                `;
            });
    
            menu.innerHTML = `
        <h2>${js.category}</h2>
        <p>${js.text}</p>
        <ul>
            ${links}
        </ul>
        
        `})
    
        JSbtn.classList.add("active");
    
        HTMLbtn.classList.remove("active");
        CSSbtn.classList.remove("active");
        ReactBtn.classList.remove("active");
        SanityBtn.classList.remove("active");
    }
    
    function ReactMap(){
        ReactResources.map((react) => {
            
            let links = ``;
            react.sources.map((link) => {
                links += `
                <li><a target="blank" href="${link.url}">${link.title}</a></li>
                `;
            });
    
            menu.innerHTML = `
        <h2>${react.category}</h2>
        <p>${react.text}</p>
        <ul>
            ${links}
        </ul>
        
        `})
    
        ReactBtn.classList.add("active");
    
        HTMLbtn.classList.remove("active");
        CSSbtn.classList.remove("active");
        JSbtn.classList.remove("active");
        SanityBtn.classList.remove("active");
    }
    
    function SanityMap(){
        SanityResources.map((sanity) => {
            
            let links = ``;
            sanity.sources.map((link) => {
                links += `
                <li><a target="blank" href="${link.url}">${link.title}</a></li>
                `;
            });
    
            menu.innerHTML = `
        <h2>${sanity.category}</h2>
        <p>${sanity.text}</p>
        <ul>
            ${links}
        </ul>
        
        `})
    
        SanityBtn.classList.add("active");
    
        HTMLbtn.classList.remove("active");
        CSSbtn.classList.remove("active");
        JSbtn.classList.remove("active");
        ReactBtn.classList.remove("active");
    }
    
    HTMLmap()
    
}