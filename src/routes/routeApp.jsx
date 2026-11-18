import Home from "../pages/Home";
import Informacion from "../pages/Informacion";
import Productos from "../pages/Productos";
import Contac from "../pages/Contac";

export let router = [
  {
    path:"/",
    element:<Home/>
  }
  ,{
    path:"/contac",
    element:<Contac/>
  }
  ,{
    path:"/informacion",
    element:<Informacion/>
  },
  {
    path:"/productos",
    element:<Productos/>
  }
]