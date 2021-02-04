import Link from 'next/link';
import { useEffect, useState } from 'react';
import Start from '../../components/Start';
import {useSelector} from 'react-redux';

import SchoolAdminLayout from '../../layouts/SchoolAdminLayout';
import {useUserManagementHook} from '../../hooks/userManagementHook';

export default function Index(){
    const [status, setStatus] = useState('admin-login');

    const user = useSelector(state => state.UserReducer);
    
    useUserManagementHook();

    return (
        <>
        {!user.isLogin ? <Start status={status} changeStatus={setStatus}/>
         : <SchoolAdminLayout>
             <h1>Dashboard in development</h1>
             </SchoolAdminLayout>}
        </>
    )
}