import style from './Contents.module.css'

export function Contents() {
  return (
    <div>
      <h1 className={style.heading}>
        Improve your front-end skills by building projects
      </h1>
      <p className={style.paragraph}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}
