import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, Typography, CircularProgress } from '@mui/material';
import "./style.css"
function MetodoPagamento() {  
  useEffect(() => {
  const mp = new window.MercadoPago("APP_USR-3b8b1486-a15d-4c8e-a040-67e0ecc612ae", { locale: "pt-BR" });

  const cardForm = mp.cardForm({
    amount: "100.5",
    iframe: true,
    form: {
      id: "form-checkout",
      cardNumber: { id: "form-checkout__cardNumber", placeholder: "Número do cartão" },
      expirationDate: { id: "form-checkout__expirationDate", placeholder: "MM/YY" },
      securityCode: { id: "form-checkout__securityCode", placeholder: "Código de segurança" },
      cardholderName: { id: "form-checkout__cardholderName", placeholder: "Titular do cartão" },
      issuer: { id: "form-checkout__issuer", placeholder: "Banco emissor" },
      installments: { id: "form-checkout__installments", placeholder: "Parcelas" },
      identificationType: { id: "form-checkout__identificationType", placeholder: "Tipo de documento" },
      identificationNumber: { id: "form-checkout__identificationNumber", placeholder: "Número do documento" },
      cardholderEmail: { id: "form-checkout__cardholderEmail", placeholder: "E-mail" },
    },
    callbacks: {
      onFormMounted: (error) => {
        if (error) console.warn("Erro ao montar o formulário:", error);
        else console.log("Formulário montado com sucesso");
      },
      onSubmit: async (event) => {
        event.preventDefault();
        const formData = cardForm.getCardFormData();
        try {
          const response = await fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: formData.token,
              issuer_id: formData.issuerId,
              payment_method_id: formData.paymentMethodId,
              transaction_amount: Number(formData.amount),
              installments: Number(formData.installments),
              description: "Descrição do produto",
              payer: {
                email: formData.cardholderEmail,
                identification: {
                  type: formData.identificationType,
                  number: formData.identificationNumber,
                },
              },
            }),
          });
          const result = await response.json();
          console.log("Resultado da transação:", result);
        } catch (error) {
          console.error("Erro ao processar pagamento:", error);
        }
      },
      onFetching: (resource) => {
        console.log("Processando recurso:", resource);
        const progressBar = document.querySelector(".progress-bar");
        progressBar.removeAttribute("value");
        return () => progressBar.setAttribute("value", "0");
      },
    },
  });
}, []);

return (
  <div className="payment-form-container">
    <form id="form-checkout">
      <div id="form-checkout__cardNumber" className="form-field"></div>
      <div id="form-checkout__expirationDate" className="form-field"></div>
      <div id="form-checkout__securityCode" className="form-field"></div>
      <input type="text" id="form-checkout__cardholderName" className="form-field" placeholder="Titular do cartão" />
      <select id="form-checkout__issuer" className="form-field"></select>
      <select id="form-checkout__installments" className="form-field"></select>
      <select id="form-checkout__identificationType" className="form-field"></select>
      <input type="text" id="form-checkout__identificationNumber" className="form-field" placeholder="Número do documento" />
      <input type="email" id="form-checkout__cardholderEmail" className="form-field" placeholder="E-mail" />
      <button type="submit" id="form-checkout__submit" className="submit-button">Pagar</button>
      <progress value="0" className="progress-bar">Carregando...</progress>
    </form>
  </div>
);
}

export default MetodoPagamento;
