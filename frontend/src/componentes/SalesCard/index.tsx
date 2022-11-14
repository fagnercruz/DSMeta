import NotificationButtom from "../NotificationButtom";
import "./style.css";

function SalesCard() {
  return (
    <div className="card">
      <h2>Vendas</h2>
      <div className="filtros">
        <div className="input-container">
          <input type="text" placeholder=" dd/mm/aaaa" />
        </div>
        <div className="input-container">
          <input type="text" placeholder=" dd/mm/aaaa" />
        </div>
      </div>
      <div>
        <table className="tabela">
          <thead>
            <tr>
              <th className="viewIn992px">ID</th>
              <th className="viewIn576px">Data</th>
              <th>Vendedor</th>
              <th className="viewIn992px">Visitas</th>
              <th className="viewIn992px">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="viewIn992px">ID</td>
              <td className="viewIn576px">data</td>
              <td>nome</td>
              <td className="viewIn992px">visitas</td>
              <td className="viewIn992px">vendas</td>
              <td>total</td>
              <td>
                <div className="btn-container">
                  <NotificationButtom />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
