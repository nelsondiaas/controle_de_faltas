# Fault control - Backend

## Getting Started
1. Fork este repositório e clone em sua máquina
2. Mude o diretório para `backend` onde você o clonou;
3. No terminal, execute:

```bash
npm install

cp env.example .env

npm run start
```
   4. Abra o host [localhost:3000](http://localhost:3000) e comece a usá-lo

### Prerequisites
* Npm
* Node (>= 12.14.0)

## Running the tests

```bash
npm run pretest

npm run test

npm run postest
```

| Endpoints 				| Verbos						| Funcionalidade |
|:---------:				|:-----:						|:----------------|
| www.hostname.com/sessions/ | POST | Login, recebe um token.
| www.hostname.com/teachers/ | POST, GET | Listagem de um item, e cadastro do teacher
| www.hostname.com/students/ | POST, GET |Listagem de um item, e cadastro do student
| www.hostname.com/modules/ | POST | Cadastro do modulo		
| www.hostname.com/class/module_id/ | POST | Cadastro da aula
| www.hostname.com/class/class_id/ | GET | Listagem de um item aula
| www.hostname.com/class_id/frequency/student_id/ | POST | Cadastro frequencia
| www.hostname.com/frequency/frequency_id/ | GET | Listagem de um item frequency
			