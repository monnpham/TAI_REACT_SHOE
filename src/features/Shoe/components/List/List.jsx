import React, { Component } from 'react'
import Item from '../Item/Item'


export default class List extends Component {
    renderList = () => {
        return (
            this.props.list.map((item, indx) => {
                return (
                    <Item
                        handelDetail={this.props.handelDetail}
                        handelAddToCart={this.props.handelAddToCart}
                        item={item} key={indx}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div className='row'>
                {this.renderList()}
            </div>
        )
    }
}
