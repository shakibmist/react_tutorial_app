import React, { Component } from 'react'

export default class Clock extends Component {

state = {date:new Date()};

componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
}
componentWillUnmount() {
    clearInterval(this.clockTimer);
}

tick(){
    this.setState({
        date: new Date(),
    })
}

  render() {
    const { date}=this.state;
    const { locale } = this.props
    return (
      <div>
        <h1 className="heading">
            <span>{date.toLocaleTimeString(locale)}</span>
        </h1>
      </div>
    )
  }
}


