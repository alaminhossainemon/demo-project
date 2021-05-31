import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/Action';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Homepage = (props) => {
    console.log(props);
    return (
        <div>
            <Header cart= {props.cart}></Header>
            <Services addToCart={ props.addToCart }></Services>
            <FeaturedService></FeaturedService>
             {/* <Footer></Footer>  */}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}
const mapDispatchToProps = 
     {
        addToCart: addToCart
    }


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);