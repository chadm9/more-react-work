/**
 * Created by mephisto on 6/27/17.
 */
function ProductCategoryRow(props){
    return(
        <tr>
            <td>{props.category}</td>
        </tr>
    )
}

function ProductRow(props){
    if(props.randomThing.inStock === true){
        var productClass = "text-success"
    }else{
        var productClass = "text-danger"
    }
    return(
        <tr>
            <td className={productClass}>{props.randomThing.name}</td>
            <td>{props.randomThing.price}</td>
        </tr>
    )
}
function ProductTable(props){


    var rows = [];

    var lastCategory = "";
    var key = 0;
    props.products.map(function(currProduct, index){
        if(currProduct.category !== lastCategory){
            //we need to add this to our rows array becasue its a new cat
            rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
            lastCategory = currProduct.category;
            key++;
        }
        rows.push(<ProductRow key={key} randomThing={currProduct} />)
        key++;
    });
    console.log(rows);


    return(
        <table>
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

function SearchBar(props){
    return(
        <form class="search-bar">
            <input type="text" placeholder="Search..." />
            <div>
                <input type="checkbox" />&nbsp;Only show products in stock
            </div>
        </form>
    )
}

function FilterableProductTable(props){
    return(
        <div className="filterable-product-table">
            <SearchBar />
            <ProductTable products={props.products} />
        </div>
    )
}

// We arent using a class (yet). So, we have to include props as a param
function Application(props){
    // MUST return a single virtualDOM element
    return(
        <FilterableProductTable products={products} />
    )
}

//2 args, what and the where
ReactDOM.render(
    <Application products={products} />,
    document.getElementById('container')
)
