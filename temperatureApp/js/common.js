function createFieldHtml(label, type, oninput, value){
    return /*HTML*/`
        ${label}
        <input 
            type="${type}"
            oninput="${oninput}"
            value="${value}"
            /><br/>    
    `;
}