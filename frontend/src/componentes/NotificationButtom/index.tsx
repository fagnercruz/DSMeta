import axios from "axios";
import { toast } from "react-toastify";
import iconeBotao from '../../assets/img/icon-btn.svg'
import { BASE_URL } from "../../Utils/request";
import './style.css'

type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(retorno => {
    toast.info("SMS Enviado com sucesso")
  });
};

function NotificationButtom({saleId}: Props) {
  return (
    <div className="btn" onClick={() => {handleClick(saleId)}}>
      <img src={iconeBotao} alt="notify" />
    </div>
  );
}

export default NotificationButtom