const Footer = () => {
    return (
        <div className="">
      <footer style={{
        padding: 50,
        background: '#03011c',
      }}>

        <h1>I am Footer</h1>
        <h1 style={{
        color: 'white'
        }}> 
        School {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h1>
        </footer>
        </div>
    )
  }
  
  export default Footer