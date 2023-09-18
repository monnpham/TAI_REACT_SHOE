import React, { Component } from 'react'

export default class Cart extends Component {
    renderTbody = () => {
        let { cart } = this.props
        return cart.map((item) => {
            return <tr>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                    <img width={100} src={item.image} alt="" />
                </td>
                <td>
                    <button
                        onClick={() => {
                            this.props.handelMinusPlus(item.id, 0)
                        }}
                        className="btn btn-danger">
                        -
                    </button>
                    {item.amout}
                    <button
                        onClick={() => {
                            this.props.handelMinusPlus(item.id, 1)
                        }}
                        className="btn btn-primary">
                        +
                    </button>
                </td>

                <td>
                    <button
                        onClick={() => {
                            this.props.handelRemoveCart(item.id)
                        }}
                        className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        })

    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTbody()}
                </tbody>
            </table>
        )
    }
}
