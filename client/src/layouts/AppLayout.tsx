import { Outlet } from 'react-router-dom'
import { Header } from '../components/ui/header/Header'
import { Footer } from '../components/ui/Footer'
import { ToastContainer } from 'react-toastify'
import { useIsDesktop } from '../hooks/useIsDesktop'

export const AppLayout = () => {
    const isDesktop = useIsDesktop();
    return (
        <>
            <Header />

            <main
                key={isDesktop ? 'desktop' : 'mobile'}
                className="font-poppins text-[#272727]"
            >
                <Outlet />
            </main>

            <Footer />

            <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </>
    )
}
