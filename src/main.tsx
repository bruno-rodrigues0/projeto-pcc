/* Root */
import { createRoot } from 'react-dom/client'

/* Rota */
import { RouterProvider } from 'react-router'
import router from './routes/routes'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
