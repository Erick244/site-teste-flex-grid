document.querySelectorAll('.animation').forEach(e => {
    e.onclick = function(a) {
        const innerStates = e.innerHTML;
        // console.log(innerStates);
        e.innerHTML = innerStates === '☰' ? '&#10006;' : '&#9776;';
    }
})