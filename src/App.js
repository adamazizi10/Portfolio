import SharedLayout from './components/SharedLayout';
import Home from './components/Home'

function App() {
 
   return(
    <>
      <SharedLayout />
      <Home />
    </>

    //  <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<SharedLayout />}>
    //         <Route index element={<Home />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    //  </>
  )
 
   
}

export default App;