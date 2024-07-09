import './css/filter.button.css'

const FilterButtons = ( {filterFunPrice, SetProduct, product, value, valueScale}) => {

    var val = { val1: -1, val2: -1};

    switch(value) {
        case "---":
            val = { val1 : -2,  val2 : -2};
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
        <div className="Filter-buttons">
            <fieldset>
                <button onClick={() => filterFunPrice(val, valueScale)}> Filtruj </button>
                <button onClick={() => SetProduct(product) }> Pokaż wszystkie </button>
            </fieldset>
        </div>
    )
}


export default FilterButtons;