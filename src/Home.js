import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>This is the home page</h1>
        <Link to='about' target='_blank'> click here for about page for link tag</Link><br></br>
        
      </div>
    );
  }
  
  export default Home;
  