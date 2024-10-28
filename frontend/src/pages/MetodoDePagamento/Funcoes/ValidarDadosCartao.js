// Função de validação para os detalhes do cartão de pagamento
const validarDadosCartao = (cardDetails) => {
    let errors = {};
  
    // Validação do número do cartão (16 dígitos numéricos)
    if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
      errors.cardNumber = "O número do cartão deve ter 16 dígitos.";
    }
  
    // Validação do nome do titular (não pode estar vazio)
    if (cardDetails.cardHolder.trim() === "") {
      errors.cardHolder = "Nome do titular é obrigatório.";
    }
  
    // Validação da data de expiração (formato MM/AA e data válida)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiryDate)) {
      errors.expiryDate = "Data de expiração inválida. Use o formato MM/AA.";
    }
  
    // Validação do CVV (3 dígitos numéricos)
    if (!/^\d{3}$/.test(cardDetails.cvv)) {
      errors.cvv = "O CVV deve ter 3 dígitos.";
    }
  
    return errors;
  };
  
  export default validarDadosCartao;
  