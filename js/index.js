function Cronometro() {
    this.rodando = false;
    this.relogio = new Relogio();
    this.visor = new Visor();
    this.iniciarButton = document.getElementById('iniciar');
    this.pauseButton = document.getElementById('pausa');
    this.marcarButton = document.getElementById('marcar');

    this.init = () => {
        this.iniciarButton.addEventListener('click', this.iniciar, false);
        this.pauseButton.addEventListener('click', this.pausar, false);
        this.marcarButton.addEventListener('click', this.marcar, false);
    }

    this.iniciar = () => {
        this.rodando = true;
        this.iniciarButton.style.display = 'none';
        this.pauseButton.style.display = 'initial';
        this.marcarButton.style.display = 'initial';
        this.relogio.iniciar(this.visor);
    }

    this.pausar = () => {
        if (this.rodando) {
            this.pauseButton.innerText = 'Reiniciar';
            this.pauseButton.style.background = 'rgb(62, 150, 252)';
            this.marcarButton.innerHTML = 'Zerar';
            this.relogio.pausar();
        }else{
            this.pauseButton.innerText = 'Pausar';
            this.pauseButton.style.background = 'rgb(248, 71, 71)';
            this.relogio.iniciar(this.visor);
            this.marcarButton.innerHTML = 'Marcar';
        }

        this.rodando = !this.rodando;
    }

    this.marcar = () => {
        if(this.rodando){
            this.visor.adicionarHistorico(this.relogio.getTempo());
        }else{
            this.pauseButton.style.display = 'none';
            this.marcarButton.style.display = 'none';
            this.iniciarButton.style.display = 'initial';
            this.marcarButton.innerHTML = 'Marcar';
            this.pauseButton.innerText = 'Pausar';
            this.pauseButton.style.background = 'rgb(248, 71, 71)';
            this.visor.setVisor('00:00:00');
            this.visor.limparHistorico();
            this.relogio.zerar()
            this.rodando = false;
        }
    }
    this.init()
}

const cronometro = new Cronometro();