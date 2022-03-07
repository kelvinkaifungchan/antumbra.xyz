import React from 'react';
import { NavBar } from '../components/navbar';
import { Text } from '../components/text';
import { Video } from '../components/video';

export const Article = () => {
return (
<div className='container-fluid'>
    <NavBar />
    {/* <Text /> */}
    <Video />
</div>
)
}