import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButtom from "../NotificationButtom";
import "./style.css";

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365))

  const [dataMin, setDataMin] = useState(min);
  const [dataMax, setDataMax] = useState(new Date());

  useEffect(()=> {
    axios.get("http://localhost:8080/sales")
         .then(retorno => {
            console.log(retorno.data);
         });
  },[]);

  return (
    <div className="card">
      <h2>Vendas</h2>
      <div className="filtros">
        <div className="input-container">
          <DatePicker
            selected={dataMin}
            onChange={(date: Date) => setDataMin(date)}
            className="dsmeta-input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="input-container">
        <DatePicker
            selected={dataMax}
            onChange={(date: Date) => setDataMax(date)}
            className="dsmeta-input"
            dateFormat="dd/MM/yyyy"
          />
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
