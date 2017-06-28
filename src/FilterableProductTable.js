/**
 * Created by mephisto on 6/27/17.
 */
import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends Component{

    render(){
        //console.log(this.props.products);
        return(
            <div className="filterable-product-table">
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        )
    }



}

export default FilterableProductTable