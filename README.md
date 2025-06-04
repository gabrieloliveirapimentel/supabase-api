# Supabase API
Bem-vindo ao repositório da **Supabase API**! Este projeto utiliza `Fastify`, `Postgres` e `Drizzle ORM` para construção de uma API moderna e performática. Aqui você encontrará as instruções para configurar e executar o projeto corretamente.

---
### Tecnologias utilizadas
- [Fastify](https://fastify.dev/) — framework web rápido e leve
- [Supabase](https://supabase.com/) — banco de dados PostgreSQL gerenciado
- [Drizzle ORM](https://orm.drizzle.team/) — ORM com tipagem completa para TypeScript
- [Postgres.js](https://github.com/porsager/postgres) — driver para PostgreSQL

---
### 1. Configuração inicial

**Criar conta pelo Supabase**  
Acesse o [Supabase](https://supabase.com/) e crie uma conta (ou faça login).

**Criar novo projeto**  
Já com a conta criada, crie um novo projeto.

**Configurar senha**  
Crie a sua senha a partir de **Database Settings**.

**Gerar URL de conexão**  
Dentro do projeto, na parte superior tem **Connect**, onde tem ``Connection String``, copie a **Transaction Pooler URL** (porta `6543`), que tem este formato:

```bash
postgresql://postgres.<project-ref>:[YOUR_PASSWORD]@aws-0-<region>.pooler.supabase.com:6543/postgres
```

**Observação:** Não use a conexão direta (porta 5432) se estiver em ambiente IPv4 (como Vercel ou desenvolvimento local), pois ela exige IPv6.

---

### 2. Rodar o Servidor
**Clonar repositório**  
A partir do seguinte comando clone este repositório e acesse a pasta:
```bash
git clone https://github.com/gabrieloliveirapimentel/supabase-api.git
cd supabase-api
```

**Criar arquivo `env`**:
Na pasta raiz, crie um arquivo `.env` com o seguinte conteúdo:
```bash
DATABASE_URL="postgresql://postgres.<project-ref>:[YOUR_PASSWORD]@aws-0-<region>.pooler.supabase.com:6543/postgres"
```

**Instalar dependências**  
Instale as dependências com o comando:
```bash
pnpm install
```

**Inicie o servidor de desenvolvimento**  
Após isso, rodar o comando para iniciar o banco de dados:
```bash
pnpm migrate
pnpm dev
```

**Se necessário, inicie o drizzle studio**
Rodar o comando para iniciar o drizzle studio:
```bash
pnpm studio
```

**Obs.:** Para primeira vez, é necessário gerar o banco de dados e popular, rode os comandos: 
```bash
pnpm generate
pnpm migrate
pnpm seed
pnpm dev
```

---
### 3. Rotas da API
**Rotas disponíveis da API**:
| Método | Rota          | Descrição               |
| ------ | ------------- | ----------------------- |
| GET    | `/users`      | Lista todos os usuários |
| GET    | `/user/:uuid` | Busca usuário por UUID  |
| POST   | `/user`       | Cria um novo usuário    |
| PUT    | `/user/:uuid` | Atualiza um usuário     |
| DELETE | `/user/:uuid` | Remove um usuário       |


**Body das requisições POST e PUT**:
```json
{
    "name": "John Doe",
    "email": "john-doe@gmail.com"
}
```

### Autor
Feito por [Gabriel Pimentel](https://github.com/gabrieloliveirapimentel) 💻.

---

### Licença
Este projeto está licenciado sob os termos da [MIT License](LICENSE).