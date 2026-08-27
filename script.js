// Configuração do Técnico
// IMPORTANTE: Altere o número abaixo para o número do WhatsApp com DDD (apenas números)
const NUMERO_WHATSAPP = "5521997044083"; 

function enviarWhatsapp(servicoEscolhido) {
    let mensagem = "";

    if (servicoEscolhido === "Geral") {
        mensagem = "Olá! Acessei seu portfólio e gostaria de fazer um orçamento técnico de manutenção.";
    } else {
        mensagem = `Olá! Acessei seu portfólio e gostaria de solicitar um orçamento para o serviço de: *${servicoEscolhido}*.`;
    }

    // Codifica o texto para o formato aceito em URLs
    const mensagemFormatada = encodeURIComponent(mensagem);
    
    // Cria o link final para a API do WhatsApp
    const linkWhatsapp = `https://whatsapp.com{NUMERO_WHATSAPP}&text=${mensagemFormatada}`;
    
    // Abre a conversa em uma nova aba
    window.open(linkWhatsapp, '_blank');
}
