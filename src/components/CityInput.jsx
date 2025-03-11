import React from 'react';

const CityInput = ({ city, setCity, fetchData, loading, handleKeyPress }) => {
  return (
    <div className="mb-3">
      <label htmlFor="city" className="form-label">Escolha uma cidade</label>
      <input
        type="text"
        className="form-control"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} /* Adicionando o evento onKeyPress */
        placeholder="Digite o nome da cidade"
      />
      <button 
        className="btn btn-primary mt-2" 
        onClick={fetchData}
        disabled={loading} /* Desativa o botão enquanto carrega */
      >
        {loading ? 'Carregando...' : 'Buscar'}
      </button>
    </div>
  );
};

export default CityInput;
