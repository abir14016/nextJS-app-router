import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
    return (

        <>
            <Navbar></Navbar>
            <div className='min-h-screen text-4xl'>
                {children}
            </div>
            <Footer></Footer>
        </>

    )
}
