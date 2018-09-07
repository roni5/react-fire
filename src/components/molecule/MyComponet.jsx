class MyComponent extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
  }
  render () {
    const {handleClick} = this.props
    return (
      <div onClick={handleClick} />
    )
  }
}