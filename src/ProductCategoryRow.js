/**
 * Created by mephisto on 6/27/17.
 */
import React, {Component} from 'react';


class ProductCategoryRow extends Component{

    render(){
        return(
            <tr>
                <td>{this.props.category}</td>
            </tr>
        )
    }



}

export default ProductCategoryRow