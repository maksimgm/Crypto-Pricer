import get from 'lodash/get';

class Prices extends React.Component {
  state = {
    currency: 'USD'
  };

  render() {
    const { bpi } = this.props;
    let currencyObj;
    if (this.state.currency === 'USD') currencyObj = get(bpi, 'USD');
    else if (this.state.currency === 'GBP') currencyObj = get(bpi, 'GBP');
    else if (this.state.currency === 'EUR') currencyObj = get(bpi, 'EUR');

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            BTC rate for {currencyObj.description}
            :
            <span className="badge badge-primary">{currencyObj.code}
              <strong>
                {currencyObj.rate}
              </strong>
            </span>
          </li>
        </ul>
        <select onChange={e => this.setState({ currency: e.target.value})}
                className="form-control mt-4"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices