function Relogio(){
    this.tempo = new Date(0);
    this.loop = null;
    
    this.iniciar = (view) => {
        this.loop = setInterval(() => {
            let tempoCorrido = this.tempo.getMilliseconds();
            this.tempo.setMilliseconds(tempoCorrido + 10);
            view.setVisor(this.getTempo());
        }, 10)
    }

    this.pausar = () => {
        clearInterval(this.loop);
    }

    this.zerar = () => {
        this.pausar();
        this.tempo = new Date(0);
    }

    this.getTempo = () => {
        let minSec = this.tempo.toLocaleTimeString().slice(3);
        let milisegundos = this.tempo.getMilliseconds();
        milisegundos = milisegundos.toString().slice(0, 2);
            
        return `${minSec}:${milisegundos}`;
    }
}