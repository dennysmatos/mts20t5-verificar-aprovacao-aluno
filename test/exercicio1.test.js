import assert from 'node:assert';
import { contarPedidosCafe } from '../source/exercicio1.js';

describe('Exercício 1 - Cafeteria', () => {
  it('Cenário 1: Deve retornar 2 cafés utilizando a entrada padrão definida no arquivo principal', () => {
    const resultado = contarPedidosCafe();

    assert.equal(resultado, 2);
  });

  it('Cenário 2: Deve retornar 0 quando a lista não contiver Café', () => {
    const outrosPedidos = ['Chá', 'Bolo de Cenoura', 'Suco de Laranja'];
    const resultado = contarPedidosCafe(outrosPedidos);

    assert.equal(resultado, 0);
  });

  it('Cenário 3: Deve contar corretamente quando houver 3 pedidos de Café', () => {
    const maisPedidos = ['Café', 'Suco de Laranja', 'Café', 'Chá', 'Café'];
    const resultado = contarPedidosCafe(maisPedidos);

    assert.equal(resultado, 3);
  });
});