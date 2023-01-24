import style from './Attribution.module.css'

export function Attribution() {
  return (
    <div class={style.attribution}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/antonpalermo" target="_blank">
        Anton Palermo
      </a>
      .
    </div>
  )
}
