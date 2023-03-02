import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button backgroundColor='red' text='Hi' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header