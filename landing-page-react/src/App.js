import logo from './logo.svg';
import './App.css';
function Landing() {
  return (
    <div className="App">
      <head>
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"rel="stylesheet"/>
      </head>
      <body style={{height:"100vh",margin:"0",display:"flex",backgroundColor:"#B3E2A7"}}>
        <div className='container' style={{border:"1px solid lightgray",width:"45%",margin:"auto",fontFamily:"sans-serif",boxshadow:"0px 0px 10px 1px gray",backgroundColor:"white"}}>
          <div className="header" style={{padding:"10px 30px",borderBottom:"3px solid lightgray",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="left">
              <p style={{fontWeight:"600",color:"gray"}}><i class="ri-arrow-left-s-line" style={{marginRight:"15px"}}></i>
              BACK TO ALL PLANTS
              </p>
            </div>
            <div className="left">
            <i class="ri-heart-line" style={{fontSize:"25px",color:"gray"}}></i>
              
            </div>

          </div>
          <div className="main" style={{display:"flex"}}>
            <div className="" style={{borderRight:"3px solid lightgray",width:"50%",display:"flex",justifyContent:"center",padding:"40px 0"}}>
              <img src="https://shrigramorganics.com/wp-content/uploads/2020/06/plants-guru-peace-lily-spathiphyllum-800x800-1.jpg" style={{height:"250px"}}></img>
            </div>

            <div className="mid2" style={{width:"50%",padding:"40px"}}>
              <h1 style={{margin:"0",fontSize:"30px",fontWeight:"500",color:"gray"}}>CLASSIC PEACE LILY</h1>
              <h5 style={{margin:"0",color:"gray"}}>POPULAR HOUSE PLANT</h5>
              <h2 style={{ fontSize:"40px",fontWeight:"500",color:"gray"}}>$18</h2>
              <p style={{marginBottom:"30px",color:"gray"}}> Classic peace Lily is a spathiphyllum floor palnt arranged in a bamboo planter with a blue 
                and re ribbom and butterfly pick</p>
                <div className="buttons">
                  <button style={{padding:"12px",fontSize:"18px",backgroundColor:"white",border:"2px solid lightgray",marginRight:"10px",color:"gray"}}> ADD TO CART</button>
                  <button style={{padding:"12px",fontSize:"18px",backgroundColor:"white",border:"2px solid lightgray",marginRight:"10px",color:"gray"}}>WISHLIST</button>
                </div>

            </div>
            </div>


        </div>

      </body>
      
    </div>
  );
}
export default App;