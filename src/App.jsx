
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './routes/Home/Home'
import Root from './routes/Root'
import Description from './routes/Description/Description'
import Building from './routes/Building/Building'
import More from './routes/More/More'
import Jobs from './routes/Jobs/Jobs'
import Contact from './routes/Contact/Contact'

function App() {

    const routes =  createBrowserRouter([
      {
          path : '/' ,
          element : <Root/>,
          children : [
            {
              index : true , element : <Home />
            },
            {
                path : 'Description',
                element : <Description />
            },
            {
                path : 'building',
                element : <Building />
            },
            {
                path : 'more',
                element : <More />
            },
            {
                path : 'jobs',
                element : <Jobs />
            },
            {
                path : 'contact',
                element : <Contact />
            },
          ]
      }
    ])

    return(
          <div className='main'>
              <RouterProvider router={routes} />
          </div>
    )
}

export default App
