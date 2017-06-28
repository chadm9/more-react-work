/**
 * Created by mephisto on 6/27/17.
 */
import React, {Component} from 'react';

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component{



    render(){
        //console.log(this.props.products);

        var rows = [];

        var lastCategory = "";
        var key = 0;
        this.props.products.map(function(currProduct, index){
            if(currProduct.category !== lastCategory){
                //we need to add this to our rows array becasue its a new cat
                rows.push(<ProductCategoryRow key={key} category={currProduct.category} />);
                lastCategory = currProduct.category;
                key++;
            }
            rows.push(<ProductRow key={key} randomThing={currProduct} />);
            key++;
            return null
        });
        //console.log(rows);



        return(
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }



}

export default ProductTable