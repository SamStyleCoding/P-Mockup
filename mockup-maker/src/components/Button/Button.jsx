import './Button.scss'

export default function Button({text}) {
  return (
	<div>
	  <button className="cta-btn">{text}</button>
	</div>
  )
}
