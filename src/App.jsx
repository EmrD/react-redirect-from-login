function App(){
  return(
    <>
    <div class="h-screen">
      <br />
      <button onClick={() => window.location.href = "/about"}>About Page</button>
      <br />
      <button onClick={() => window.location.href = "/test1"}>Test 1 Page</button>
      <br />
      <button onClick={() => window.location.href = "/test2"}>Test 2 Page</button>
      <br />
    </div>
    </>  
  )
}

export default App;