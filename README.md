# Healthcore

Healthcore é um **Healthtech Core SaaS** focado em **reduzir drasticamente o tempo que médicos gastam escrevendo prontuário**, usando **ditado por voz + estruturação automática**, sem aumentar fricção no atendimento.

> 🎯 Princípio fundamental  
> **Nada pode atrapalhar o ato médico.**

---

## 🧠 Visão do Produto

- Automação > inputs manuais  
- CRM invisível (acontece como consequência do uso clínico)  
- Pós-consulta automático para o paciente  
- Escala B2B sem crescimento de equipe administrativa  
- Plugável a outros sistemas  

---

## 🏢 Multi-Tenant

- **Tenant = Clínica**
- Médico pode pertencer a múltiplos tenants
- Paciente pertence a um único tenant
- Isolamento obrigatório em:
  - Backend
  - Banco de dados (Row Level Security)
- Nunca confiar apenas no frontend

---

## 🧱 Arquitetura

### Visão Geral

- **Modular Monolith** (evolutivo para microsserviços)
- **Event-driven desde o MVP**
- **Serverless**
- Clean Architecture (light)
- Repository Pattern
- Service Layer
- Domain Events
- DTOs explícitos

---  
- /apps
├── web # Next.js (frontend)
├── api # Serverless backend
/packages
├── shared # Tipos e DTOs
├── db # Schema, migrations, RLS
└── auth # Guards e middlewares


---

## ⚙️ Stack Tecnológica

### Frontend
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Server Components sempre que possível

### Backend
- Node.js + TypeScript
- Serverless (Vercel Functions)
- APIs REST (sem GraphQL no MVP)

### Banco de Dados
- Supabase (PostgreSQL)
- UUID
- JSONB para dados clínicos estruturados
- Row Level Security (RLS)

### Autenticação
- Supabase Auth
- JWT enriquecido com:
```json
{
  "user_id": "...",
  "tenant_id": "...",
  "role": "doctor | admin | staff"
}

### Infra

Vercel (Frontend + APIs)

Supabase (DB, Auth, Storage)

Event queue simples

Pay-as-you-go / Free tier friendly

---

🔐 Autenticação & Autorização

Fluxo:

Usuário faz login

Sistema identifica tenants associados

Usuário escolhe tenant ativo

JWT é atualizado com tenant_id

Toda request exige tenant válido

Controle de acesso:

Role-based

Tenant-based

Guards no backend

RLS no banco como segunda camada

---

🗄️ Modelo de Dados (Resumo)

Entidades principais:

tenants

users

user_tenants

patients

consultations

records (prontuário)

audio_records

events

notifications

audit_logs

Todas as tabelas com tenant_id usam RLS com:

tenant_id = auth.jwt()->>'tenant_id'


---

📄 Licença

MIT
---



