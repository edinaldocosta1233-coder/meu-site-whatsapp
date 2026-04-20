ction abrirWhatsApp() {
    let numero = "5511971039525";

    let mensagem = "Olá! Vim pelo site e quero atendimento.";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");
}