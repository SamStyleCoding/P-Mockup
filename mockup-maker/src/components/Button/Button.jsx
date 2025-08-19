import './Button.scss'

export default function Button({text, color}) {
  return (
	<button className="cta-btn" style={{ backgroundColor: color}}>
		{text}
	</button>
  )
}
