function Visor(){
    this.principal = document.getElementById('tempo');
    this.historico = document.getElementById('historico');

    this.setVisor = (tempo) => {
        this.principal.innerHTML = tempo;
    }

    this.adicionarHistorico = (horario) => {
        let span = document.createElement('span');
        span.innerText = historico.length;

        let novoLi = document.createElement('li');
        novoLi.appendChild(span);

        let id = document.getElementsByTagName('li').length + 1;
        novoLi.innerHTML = `<span>${id}</span>\n${horario}`
        this.historico.appendChild(novoLi);
    }

    this.limparHistorico = () => {
        this.historico.innerHTML = '';
    }
}