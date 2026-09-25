import assert from 'node:assert';
import { processarLogsTestes } from '../source/exercicio2.js';

describe('Exercício 2 - Relatório de Execução de Testes', () => {
  it('Cenário 1: Deve calcular 60% de sucesso para a lista padrão da aula', () => {
    const logs = ['pass', 'fail', 'pass', 'fail', 'pass'];
    const resultado = processarLogsTestes(logs);

    assert.equal(resultado.totalTestes, 5);
    assert.equal(resultado.totalSucessos, 3);
    assert.equal(resultado.totalFalhas, 2);
    assert.equal(resultado.passRate, '60%');
  });

  it('Cenário 2: Deve retornar 100% de sucesso quando todos passarem', () => {
    const logs = ['pass', 'pass', 'pass', 'pass'];
    const resultado = processarLogsTestes(logs);

    assert.equal(resultado.totalTestes, 4);
    assert.equal(resultado.totalSucessos, 4);
    assert.equal(resultado.totalFalhas, 0);
    assert.equal(resultado.passRate, '100%');
  });

  it('Cenário 3: Deve retornar 0% de sucesso quando todos falharem', () => {
    const logs = ['fail', 'fail', 'fail'];
    const resultado = processarLogsTestes(logs);

    assert.equal(resultado.totalTestes, 3);
    assert.equal(resultado.totalSucessos, 0);
    assert.equal(resultado.totalFalhas, 3);
    assert.equal(resultado.passRate, '0%');
  });
});