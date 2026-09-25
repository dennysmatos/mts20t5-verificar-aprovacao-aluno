export const pedidosPadrao = ['Café', 'Chá', 'Bolo de Cenoura', 'Café', 'Suco de Laranja'];

export function contarPedidosCafe(pedidos = pedidosPadrao) {
  let totalCafe = 0;

  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i] === 'Café') {
      totalCafe++;
    }
  }

  return totalCafe;
}