import style from "./HelpButton.module.css"

function HelpButton({onClick}){
 

  return (
    <div className={style.helpButton}>
      <button aria-label="도움말 닫기버튼" onClick={onClick}>x</button>
      <div><p>총 상품금액에</p> <p>배송비는 포함되어 있지 않습니다.</p></div>
      <div><p>결제시 배송비가 추가될 수 있습니다. </p></div>
    </div>)
}

export default HelpButton