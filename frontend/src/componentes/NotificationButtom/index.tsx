import iconeBotao from '../../assets/img/icon-btn.svg'
import './style.css'

function NotificationButtom() {
  return (
    <div className="btn">
      <img src={iconeBotao} alt="notify" />
    </div>
  );
}

export default NotificationButtom