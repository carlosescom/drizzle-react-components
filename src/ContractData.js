import React, { Component } from 'react'
class ContractData extends Component {
  constructor(props) {
    super(props)

    // Fetch initial value from chain and return cache key for reactive updates.
    this.method = this.props.drizzle.contracts[this.props.contract].methods[this.props.method];
    var methodArgs = this.props.methodArgs ? this.props.methodArgs : [];
    this.state = {dataKey: this.method.cacheCall(...methodArgs)};
  }

  componentDidUpdate(prevProps) {
    if(this.props.methodArgs){
      if(JSON.stringify(this.props.methodArgs) !== JSON.stringify(prevProps.methodArgs)){
        this.setState({
          dataKey: this.method.cacheCall.apply(method, _toConsumableArray(this.props.methodArgs))
        });
      }
    }
  }
  
	render() {
		const { drizzle, drizzleState } = this.props;
 		// Contract is not yet intialized.
		if(!drizzleState.contracts[this.props.contract].initialized) {
			return (
				<span>Initializing...</span>
			);
		}
	
		// If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
		if(!(this.state.dataKey in drizzleState.contracts[this.props.contract][this.props.method])) {
			return null;
		}
 		// Show a loading spinner for future updates.
		var pendingSpinner = drizzleState.contracts[this.props.contract].synced ? '' : ' 🔄';
		
		// Optionally hide loading spinner (EX: ERC20 token symbol).
		if (this.props.hideIndicator) {
			pendingSpinner = '';
		}
 		var displayData = drizzleState.contracts[this.props.contract][this.props.method][this.state.dataKey].value;
		
		if (displayData instanceof Object) {
			displayData = Object.values(displayData);
		}
 		if (this.props.displayFunc) {
			return this.props.displayFunc(displayData);
		}
 		// Need to convert on an per-item basis for Objects/arrays.
 		// Optionally convert to UTF8
		if (this.props.toUtf8) {
			displayData = drizzle.web3.utils.hexToUtf8(displayData);
		}
		
		// Optionally convert to Ascii
		if (this.props.toAscii) {
			displayData = drizzle.web3.utils.hexToAscii(displayData);
		}
 		if (displayData instanceof Array) {
			const displayListItems = displayData.map((datum, i) => (
				<li key={i}>{datum}{pendingSpinner}</li>
			));
			return (
				<ul>{displayListItems}</ul>
			);
		}
      
		return (
			<span>{displayData}{pendingSpinner}</span>
		);
	}
}

export default ContractData;
