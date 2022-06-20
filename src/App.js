import './App.css';
import './Form.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

const server = process.env.REACT_APP_API_URL

export default function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
};
