import React from 'react';

class Simulador extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Mandante:
                    <select>
                    <option value="flamengo">Flamengo</option>
                        <option value="palmeiras">Palmeiras</option>
                        <option value="internacional">Internacional</option>
                    </select>
                </label>

                <label>
                    Visitante:
                    <select>
                        <option value="flamengo">Flamengo</option>
                        <option value="palmeiras">Palmeiras</option>
                        <option value="internacional">Internacional</option>
                    </select>

                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default Simulador;