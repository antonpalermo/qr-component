import qr from '../assets/image-qr-code.png'
import { Contents } from './Contents'

export function Card() {
  return (
    <div>
      <img src={qr} alt="qr code" />
      <Contents />
    </div>
  )
}
