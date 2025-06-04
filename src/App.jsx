import { createBrowserRouter,RouterProvider } from "react-router"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ViewEvent from "./pages/Viewevent"
import ViewCollege from "./pages/ViewCollege"
import CreatEvent from "./pages/CreateEvent"
import NotFound from "./pages/NotFound"

const eventHiveRouter = createBrowserRouter([
{ path: '/', element: <Home /> },
{ path: '/register', element: <Register /> },
{ path: '/login', element: <Login /> },
{ path: '/ view-event', element: <ViewEvent/> },
{ path: '/ view-college', element: <ViewCollege/> },
{ path: '/create-event', element: <CreatEvent/> },
{ path: '*', element: <NotFound /> },
]);

function App() {
  return (
    <>
    <RouterProvider router={eventHiveRouter} />
    </>
  )
}

export default App
