import axios from "axios";
import iconeBotao from '../../assets/img/icon-btn.svg'
import { BASE_URL } from "../../Utils/request";
import './style.css'

type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(retorno => {console.log(retorno)})
}

function NotificationButtom({saleId}: Props) {
  return (
    <div className="btn" onClick={() => {handleClick(saleId)}}>
      <img src={iconeBotao} alt="notify" />
    </div>
  );
}

export default NotificationButtom