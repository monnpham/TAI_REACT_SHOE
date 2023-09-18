import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        let { image, name, shortDescription, price } = this.props.detail
        return (
            < div >
                <h4>Name:{name}</h4>
                <h4>Description:{shortDescription}</h4>
                <h4>Price:${price}</h4>
                <img width={600} src={image} alt="" />
            </div >
        )
    }
}
