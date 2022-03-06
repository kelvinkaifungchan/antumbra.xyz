import React from 'react';

export const Text = () => {
return (
<div className='px-3' style={{fontSize: '2rem'}}>
    <div className='row pb-5'>
        <div className='col-6'>
            Contributor(s):<br/>
            Tiziana Terranova<br/>
            Ravi Sundaram
        </div>
        <div className='col-6'>
            Colonial Infrastructures
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <div className="row align-bottom">
                <div className='col-8'>
                    <img className='w-100' src='https://www.phaidon.com/resource/shooting-space-p123-1.jpg'
                        alt='Ringroad (Houston)' />
                </div>
                <div className='caption'>
                    Bas Princen
                </div>
            </div>
        </div>
    </div>
</div>
)
}