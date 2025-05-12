const API_BASE_URL = 'http://localhost:3000';

const api = {
  // Pessoas
  cadastrarPessoa: async (dadosPessoa) => {
    const response = await fetch(`${API_BASE_URL}/pessoas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosPessoa),
    });
    return response.json();
  },

  listarPessoas: async () => {
    const response = await fetch(`${API_BASE_URL}/pessoas`);
    return response.json();
  },

  // Matrículas
  vincularEducacao: async (dadosMatricula) => {
    const response = await fetch(`${API_BASE_URL}/matriculas/educacao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosMatricula),
    });
    return response.json();
  },

  // Pacientes
  vincularConectSus: async (dadosPaciente) => {
    const response = await fetch(`${API_BASE_URL}/pacientes/conect-sus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosPaciente),
    });
    return response.json();
  },

  vincularEspecialidade: async (dadosEspecialidade) => {
    const response = await fetch(`${API_BASE_URL}/pacientes/especialidades`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosEspecialidade),
    });
    return response.json();
  },

  // Login (simulado - você precisará implementar no backend)
  login: async (credenciais) => {
    const response = await fetch(`${API_BASE_URL}/pessoas/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciais),
    });
    return response.json();
  },}

export default api;