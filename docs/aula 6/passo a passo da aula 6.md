# Aula 6: estruturas de repetição, condicionais e testes automatizados

## 1. Preparação

### 1.1 Retome as aulas anteriores

Se você não acompanhou as aulas anteriores, conclua os exercícios e a estrutura do projeto antes de continuar.

### 1.2 Abra o projeto

1. Baixe o projeto ou abra a pasta do repositório no VS Code.
2. Certifique-se de que o arquivo `package.json` contém `"type": "module"`.
3. No terminal, confirme que você está na pasta raiz do projeto.
4. Instale as dependências de desenvolvimento (Mocha), caso ainda não tenha feito:

```bash
npm install
```

### 1.3 Estrutura de arquivos esperada

```text
projeto/
├── package.json
├── source/
│   ├── exercicio1.js
│   └── exercicio2.js
└── test/
    ├── exercicio1.test.js
    └── exercicio2.test.js
```

---

## 2. Revise a regra de negócio dos exercícios

### Exercício 1: Pedidos da Cafeteria

Dada uma lista de pedidos feitos ao longo do dia, o programa deve iterar sobre a lista e contar quantas ocorrências do item `'Café'` foram registradas.

- **Entrada padrão:** `['Café', 'Chá', 'Bolo de Cenoura', 'Café', 'Suco de Laranja']`
- **Saída esperada:** `2`

### Exercício 2: Relatório de Execução de Testes

Dado um log de execuções contendo status de `'pass'` e `'fail'`, a função deve contabilizar o total de testes executados, a quantidade de sucessos, a quantidade de falhas e a taxa de sucesso (*pass rate*) calculada em porcentagem.

- **Entrada padrão:** `['pass', 'fail', 'pass', 'fail', 'pass']`
- **Saída esperada:**
  - Total de testes: `5`
  - Total de sucessos: `3`
  - Total de falhas: `2`
  - Pass rate: `'60%'`

---

## 3. Execute os testes

Execute o Mocha na raiz do projeto utilizando o comando de teste:

```bash
npm test
```

Ou execute diretamente via `npx`:

```bash
npx mocha test/**/*.test.js
```

O resultado esperado é:

```text
6 passing
```

---

## 4. Analise os cenários de teste

Cada exercício possui 3 casos de teste cobrindo a entrada solicitada, cenários sem ocorrências e variações de tamanho de lista.

### Cenários do Exercício 1 (`test/exercicio1.test.js`)

| Cenário | Entrada | Resultado esperado | O que o cenário verifica |
| :--- | :--- | :---: | :--- |
| **CT01** | Entrada padrão declarada no arquivo fonte | `2` | Verifica a contagem com a lista base da aula |
| **CT02** | `['Chá', 'Bolo de Cenoura', 'Suco de Laranja']` | `0` | Verifica o comportamento quando não há nenhum café |
| **CT03** | `['Café', 'Suco de Laranja', 'Café', 'Chá', 'Café']` | `3` | Valida a contagem em uma lista com mais ocorrências |

### Cenários do Exercício 2 (`test/exercicio2.test.js`)

| Cenário | Entrada | Resultado esperado | O que o cenário verifica |
| :--- | :--- | :--- | :--- |
| **CT01** | `['pass', 'fail', 'pass', 'fail', 'pass']` | Total: `5`, Sucessos: `3`, Falhas: `2`, Pass rate: `'60%'` | Valida o caso base do exercício |
| **CT02** | `['pass', 'pass', 'pass', 'pass']` | Total: `4`, Sucessos: `4`, Falhas: `0`, Pass rate: `'100%'` | Valida o cálculo quando todos os testes passam |
| **CT03** | `['fail', 'fail', 'fail']` | Total: `3`, Sucessos: `0`, Falhas: `3`, Pass rate: `'0%'` | Valida o cálculo quando todos os testes falham |

### Exemplo de implementação no padrão **AAA**

```javascript
import assert from 'node:assert';
import { contarPedidosCafe } from '../source/exercicio1.js';

it('CT01: deve retornar 2 cafés utilizando a entrada padrão definida no arquivo principal', function () {
  // Arrange: preparar
  const resultadoEsperado = 2;

  // Act: executar
  const resultadoEncontrado = contarPedidosCafe();

  // Assert: verificar
  assert.strictEqual(resultadoEncontrado, resultadoEsperado);
});
```

---

## 5. Implementação e boas práticas

Durante o desenvolvimento:

1. **Laços de repetição (`for`):** Itere sobre os itens da coleção pelo índice (`i = 0; i < lista.length; i++`).
2. **Condicionais simples (`if` / `else`):** Mantenha as comparações diretas de strings, respeitando maiúsculas e minúsculas sem funções auxiliares ainda não abordadas.
3. **Módulo de asserção nativo:** Utilize `node:assert` em conjunto com ES Modules (`import`/`export`), eliminando a necessidade de bibliotecas externas como o Chai.
4. **Execução contínua:** Execute `npm test` a cada alteração para garantir que a lógica atende a todos os critérios.

---

## 6. Checklist da aula

- [ ] O projeto foi aberto na raiz correta e o `package.json` está configurado com `"type": "module"`.
- [ ] As dependências do Mocha foram instaladas.
- [ ] As funções utilizam apenas `for`, `if` e `else` para controle de fluxo.
- [ ] A entrada padrão do Exercício 1 foi declarada no arquivo de código-fonte (`source/exercicio1.js`).
- [ ] Foram criados pelo menos 3 casos de teste para cada um dos exercícios.
- [ ] Todos os 6 testes foram executados com sucesso no terminal (`6 passing`).
