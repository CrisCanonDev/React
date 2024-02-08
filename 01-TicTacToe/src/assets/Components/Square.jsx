export const Square = ({ children, selected, updateBoard, index }) => {

    const className = `square ${selected ? 'is-selected' : ''}`
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }