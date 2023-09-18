import React, { Component } from 'react'
import { data } from '../components/Data/Data'
import Cart from '../components/Cart/Cart'
import List from '../components/List/List'
import Detail from '../components/Detail/Detail'
import { message } from 'antd'


export default class Shoe extends Component {
    state = {
        data: data,
        cart: [],
        detail: data[0]
    }
    handelAddToCart = (shoe) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex((item) => item.id === shoe.id)
        if (index === -1) {
            let newShoe = { ...shoe, amout: 1 }
            cloneCart.push(newShoe)
        } else {
            cloneCart[index].amout++
        }
        this.setState({ cart: cloneCart })
        message.success("Thêm sản phẩm thành công")

    }
    handelRemoveCart = (shoeId) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex((item) => item.id === shoeId)

        cloneCart.splice(index, 1)
        this.setState({ cart: cloneCart })
        message.success("Xóa thành công")
    }
    handelMinusPlus = (shoeId, option) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex((item) => item.id === shoeId)

        if (option === 0) {
            if (cloneCart[index].amout > 1) {
                cloneCart[index].amout--
            } else {
                cloneCart.splice(index, 1)
            }
        } else {
            cloneCart[index].amout++
        }
        this.setState({ cart: cloneCart })
    }
    handelDetail = (shoe) => {
        this.setState({ detail: shoe })
    }
    render() {
        return (
            <div>
                <h1>SHOE SHOP</h1>
                <div className="row">
                    <div className="col-6">
                        <Cart
                            handelMinusPlus={this.handelMinusPlus}
                            handelRemoveCart={this.handelRemoveCart}
                            cart={this.state.cart}
                        />
                    </div>
                    <div className="col-6">
                        <List
                            handelDetail={this.handelDetail}
                            handelAddToCart={this.handelAddToCart}
                            list={this.state.data}
                        />
                    </div>
                    <div className="col-12">
                        <Detail detail={this.state.detail} />
                    </div>
                </div>
            </div>

        )
    }
}
