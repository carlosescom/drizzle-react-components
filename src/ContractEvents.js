import { drizzleConnect } from 'drizzle-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
 * Create component.
 */

class ContractEvents extends Component {
  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts

    // Keep track of events already shown.
    this.state = {
        events: []
    }
  }

  render() {
    if(!this.props.contracts[this.props.contract].initialized) {
      return (
        <span>Initializing...</span>
      )
    }

    // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
    if(!(this.dataKey in this.props.contracts[this.props.contract][this.props.method])) {
      return (
        <span>Fetching...</span>
      )
    }

    // Show a loading spinner for future updates.
    var pendingSpinner = this.props.contracts[this.props.contract].synced ? '' : ' 🔄'

    return(
      <span>{this.props.contracts[this.props.contract][this.props.method][this.dataKey].value}{pendingSpinner}</span>
    )
  }
}

ContractEvents.contextTypes = {
  drizzle: PropTypes.object
}

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts
  }
}

export default drizzleConnect(ContractEvents, mapStateToProps)