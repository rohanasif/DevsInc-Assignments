import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){

    }

  render() {
    if(this.state.hasError){
        return (
          <div>Something went wrong</div>
        )
    }
    return this.props.children
  }
}

export default ErrorBoundary