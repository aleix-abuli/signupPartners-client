import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import UserPage from '../pages/UserPage/UserPage';
import EditUserPage from '../pages/UserPage/EditUserPage';
import NewStorePage from '../pages/Stores/NewStorePage';
import StoreDetailsPage from '../pages/Stores/StoreDetailsPage';
import EditStorePage from '../pages/Stores/EditStorePage';
import NewItemPage from '../pages/Items/NewItemPage';
import EditItemPage from '../pages/Items/EditItemPage';
import PrivateRoute from './PrivateRoute';
import AnonRoute from './AnonRoute';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />

                <Route path='/signup' element={<AnonRoute />} >
                    <Route path='' element={<SignUpPage />} />
                </Route>
                
                <Route path='/login' element={<AnonRoute />} >
                    <Route path='' element={<LogInPage />} />
                </Route>

                <Route path="/partners/:id" element={<PrivateRoute />}>
                    <Route path="" element={<UserPage />} />
                </Route>
                
                <Route path="/partners/:id/edit" element={<PrivateRoute />}>
                    <Route path="" element={<EditUserPage />} />
                </Route>

                <Route path='/stores/new' element={<PrivateRoute />}>
                    <Route path='' element={<NewStorePage />} />
                </Route>
                
                <Route path='/stores/:storeId' element={<PrivateRoute />}>
                    <Route path='' element={<StoreDetailsPage />} />
                </Route>
                
                <Route path='/stores/:storeId/edit' element={<PrivateRoute />}>
                    <Route path='' element={<EditStorePage />} />
                </Route>

                <Route path='stores/:storeId/items/new' element={<PrivateRoute />}>
                    <Route path='' element={<NewItemPage />} />
                </Route>
                
                <Route path='/edit/:itemId' element={<PrivateRoute />}>
                    <Route path='' element={<EditItemPage />} />
                </Route>

            </Routes>
        </>
    );
};