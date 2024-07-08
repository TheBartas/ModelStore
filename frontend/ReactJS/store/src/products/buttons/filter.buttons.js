
const FilterButtons = ( {filterFun, SetProduct, product, value}) => {

    var val = { val1: 0, val2: 1};

    switch(value) {
        case "---":
            val = { val1 : -1,  val2 : -1};
            break;
        case "0-50":
            val = { val1: 0.00, val2 : 50.00};
            break;
        case "50-100":
            val = { val1: 50.00, val2 : 100.00};
            break;
        case "100-150":
            val = { val1: 100.00, val2 : 150.00};
            break;
        case "150-200":
            val = { val1: 150.00, val2 : 200.00};
            break;
        case "200":
            val = { val1: 200.00, val2 : 10000.00};
            break;
        default:
            val = { val1 : -1,  val2 : -1};
    }

    return (
        <div>
            <button onClick={() => filterFun(val)}> Filtruj </button>
            <button onClick={() => SetProduct(product) }> Wszystkie </button>
        </div>
    )
}


export default FilterButtons;