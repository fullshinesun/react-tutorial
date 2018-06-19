import * as React from 'react'
import './Counter.css'


interface CounterProps {
    number: number,
    color?: any,
    handleIncrement: () => void,
    handleDecrement: () => void,
    handleSetColor: (color: any) => void,
}


class Counter extends React.Component<CounterProps> {
    static defaultProps = {
        color: 'black',
        handleIncrement: () => console.warn('handleIncrement not defined'),
        handleDecrement: () => console.warn('handleDecrement not defined'),
        handleSetColor: () => console.warn('handleSetColor not defined'),
    }
    constructor(props:any){
        super(props)
    }

    render() {
        const number = this.props.number
        const color = this.props.color
        
        return (
            <div className="Counter" style={{backgroundColor: color}}
                onClick={this.props.handleIncrement}
                onDoubleClick={this.props.handleSetColor}
                onContextMenu= {
                    (e) => {
                        e.preventDefault()
                        this.props.handleDecrement()
                    }
                }
            >
                {number}
            </div>
        )
    }
}

export default Counter