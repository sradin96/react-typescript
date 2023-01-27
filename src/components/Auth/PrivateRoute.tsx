import { Navigate } from 'react-router';

function PrivateRoute(props: { user: string; children: JSX.Element }) {
    return props.user ? props.children : <Navigate to='/signin' />
}

export default PrivateRoute