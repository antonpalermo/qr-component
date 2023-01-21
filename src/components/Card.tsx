import qr from '../assets/image-qr-code.png'
import { Contents } from './Contents'

import style from './Card.module.css'

export function Card() {
  return (
    <div className={style.cardContainer}>
      <img src={qr} alt="qr code" className={style.image}/>
      <Contents />
    </div>
  )
}
