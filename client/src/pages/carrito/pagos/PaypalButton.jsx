import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import axios from "axios";  
// Puedes colocar esta función en MetodoPago.jsx o pasarla como prop a los métodos de pago

const actualizarVentaPagada = async () => {
  try {
    const token = localStorage.getItem("token");
    // 1. Obtener usuarioId
    const userRes = await axios.get("http://127.0.0.1:8080/usuario-id", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const usuarioId = userRes.data;

    // 2. Obtener la venta pendiente
    const ventaPendienteRes = await axios.get(`http://localhost:8080/api/v1/venta/segunda-pendiente/${usuarioId}`);
    const ventaId = ventaPendienteRes.data.object;

    // 3. Actualizar la venta a PAGADO
    await axios.put(`http://localhost:8080/api/v1/venta/${ventaId}`, {
      id: ventaId,
      usuarioId,
      estado: "PAGADO"
    });

    // Aquí puedes mostrar un mensaje de éxito o continuar el flujo
    // Swal.fire("Venta actualizada", "La venta fue marcada como PAGADO", "success");
  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar la venta a PAGADO", "error");
    console.error(error);
  }
};

const PaypalButton = ({ amount, onSuccess }) => (
    
  <PayPalScriptProvider options={{ "client-id": "ATaavYymwB377Sr8RLMX2SFGLA71tjUY8ULuQAc_bab4luBD7uq4DSdcVXvy5kY3HGvMoaRS30jzyvwt", currency: "USD" }}>
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        if (onSuccess) onSuccess(details);
        alert("Pago realizado con éxito. ID: " + details.id);
        actualizarVentaPagada();
      }}
      onError={err => {
        alert("Error en el pago con PayPal");
        console.error(err);
      }}
    />
  </PayPalScriptProvider>
);

export default PaypalButton;