import React, { Component } from 'react'

export default class Item extends Component {
    convertName = (name) => {
        let lengthName = 12
        if (name.length > lengthName) {
            return name.slice(0, lengthName) + "..."
        } else return name
    }

    render() {
        let { image, name } = this.props.item
        return (
            <div className='col-3'>
                <div className="card text-left">
                    <img className="card-img-top" src={image} alt='' />
                    <div className="card-body">
                        <h4 className="card-title">{this.convertName(name)}</h4>
                        <button
                            onClick={() => {
                                this.props.handelDetail(this.props.item)
                            }}
                            className="btn btn-primary mr-2">
                            View
                        </button>
                        <button
                            onMouseOver={() => {
                                this.props.handelAddToCart(this.props.item)
                            }}
                            className="btn btn-danger">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
