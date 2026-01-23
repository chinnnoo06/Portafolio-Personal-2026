import { Outlet } from 'react-router-dom'
import { Header } from '../components/ui/header/Header'
import { Footer } from '../components/ui/Footer'
import { ToastContainer } from 'react-toastify'

export const AppLayout = () => {
    return (
        <>
            <Header />

            <main className="font-poppins text-[#272727]">
                <Outlet />
            </main>

            <Footer />

            <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </>
    )
}
