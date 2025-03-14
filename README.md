# Teste Técnico de Automação

## Tecnologias Utilizadas
- Testes de Carga: K6
- Testes de API: Playwright
- Testes E2E: Cucumber + Playwright
- Testes Mobile: Appium
- CI/CD: GitHub Actions

## Como Executar
```sh
npm install
npm run load-test
npm run api-test
npm run e2e-test


## 📋 Cenários de Teste Implementados

### 1. Testes de Carga (K6)
- **Cenário Principal**: 
  - 500 usuários simultâneos por 5 minutos
  - Ramp-up gradual: 1min para 100 VUs → 3min em 500 VUs → 1min ramp-down
  - Validações:
    - 95% das requisições com resposta < 2s
    - Taxa de erro < 1%

### 2. Testes de API (Playwright)
| Endpoint       | Método | Cenários Validados                  |
|----------------|--------|--------------------------------------|
| /posts         | GET    | Status 200, estrutura do JSON       |
| /posts         | POST   | Status 201, criação de recurso      |
| /posts/{id}    | PUT    | Status 200, atualização de dados    |
| /posts/{id}    | DELETE | Status 200, exclusão de recurso     |

**Casos Negativos Testados**:
- Request body inválido (400 Bad Request)
- Recurso não encontrado (404 Not Found)

### 3. Testes E2E (Cucumber)
**Fluxo de Login**:
```gherkin
Scenario: Login válido
  Given Acesso à página de login
  When Preencho credenciais corretas
  Then Devo ver o dashboard principal

Scenario: Login inválido
  When Preencho senha incorreta
  Then Devo ver mensagem de erro
Scenario: Compra completa
  Given Adiciono produto ao carrinho
  When Preencho dados de pagamento válidos
  Then A compra é finalizada com sucesso

4. Testes Mobile (Appium)
Cenários Android:

Login com credenciais válidas

Preenchimento de formulário complexo

Validação de elementos na tela após navegação

Testes cross-platform (Android/iOS)

✅ Boas Práticas Adotadas
⚙️ Arquitetura
Page Object Pattern (E2E e Mobile)

Separação clara de camadas:

tests/: Casos de teste

pages/: Objetos de página

features/: Especificações em Gherkin

Configuração centralizada para URLs e credenciais

🔒 Segurança
Uso de variáveis de ambiente para dados sensíveis

Tokens com escopo mínimo e expiração curta

Relatórios sem exposição de dados sensíveis

🚀 CI/CD
Execução automática de testes via GitHub Actions:
jobs:
  load-tests: runs-on: ubuntu-latest
  api-tests: needs: load-tests
  e2e-tests: needs: api-tests
Gate de qualidade antes do merge

Paralelização de jobs

📈 Otimização
Reuso de funções helper

Timeouts configuráveis por ambiente

Retry para testes flaky

Geração de relatórios HTML automatizada

▶️ Como Executar
# Instalar dependências
npm install

# Executar todos os testes
npm run test:all

# Executar grupos específicos
npm run test:load    # Testes de carga
npm run test:api     # Testes de API
npm run test:e2e     # Testes end-to-end
npm run test:mobile  # Testes mobile

📊 Relatórios
Tipo de Teste	Localização	Exemplo
Carga	load-tests/reports/	load-report.html
API	api-tests/reports/	api-report.html
E2E	e2e-tests/reports/	e2e-report.html
Mobile	mobile-tests/reports/	mobile-report.html
