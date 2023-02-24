import product_Image from './product.png';
import styles from "./Product.module.css"
import { useState } from 'react';
import HelpButton from './HelpButton';


function Product({ name , price , sail}){
  const [click,setClick] = useState(false);
  const [count,setCount] = useState(1);
 
  const minusButton = () =>{setCount(!(count===0)?count - 1:0)};
  const plusButton = () =>{ setCount(count + 1)};


  return (
    <ul className={styles.itemList}>
      <li>
        <img src={product_Image} alt="상품 이미지" />
      </li>
      <li>
        <h2>{name}</h2>
      </li>
      <li className={styles.priceList}>
        <span aria-label='세일 퍼센트'>{sail? sail+'%' : null}</span>
        <div>
          <span aria-label='원가'>{sail?price+'원' : null}</span>
          <span aria-label='가격'>{sail? price - price * (sail/100): price}원</span>
        </div>
      </li>
      <li className={styles.deliveryList}>
        <section>
          <p>택배배송</p>
          <p>3,000원</p>
          <p>(주문시 결제)</p>
        </section>
        <section>
          <p>10개마다 부과</p>
        </section>
      </li>
      <li className={styles.buttonList}>        
        <button onClick={minusButton}>-</button>
        <p>{count}</p>
        <button onClick={plusButton}>+</button>    
      </li>
      <li className={styles.sumPriceList}>
        <span>
          <p>총 상품 금액</p>
          <button onClick={()=>{setClick(click?0:1)}} aria-label='총 상품 금액 도움말'>?</button>
          {click?<HelpButton onClick={()=>{setClick(0)}}/>:null}
        </span>
        <span>
          <p>총 수량 {count}개</p>
          <p>{(price * (sail/100))*count}원</p>
        </span>
      </li>
      <li>
        {count?<button className={styles.purchase}>구매하기</button>
        : <button className={styles.purchase} disabled>구매하기</button>
        }
        
      </li>
      
      
     
    </ul>
  )
}
Product.defaultProps = {   
  name : "상품 이름",
  price :44000,
  sail : 50
}
export default Product;
