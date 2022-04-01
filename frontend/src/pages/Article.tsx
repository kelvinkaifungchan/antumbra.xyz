import React from 'react';
import { NavBar } from '../components/navbar';
import { Photography } from '../components/photography';
import { Text } from '../components/text';
import { Video } from '../components/video';

export const Article = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <Text />
    {/* <Video /> */}
    {/* <Photography /> */}
</div>
)
}