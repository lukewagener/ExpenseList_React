import './Card.css'

// Card layout for Expense Items.
export default function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}