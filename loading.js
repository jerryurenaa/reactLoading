import React from 'react';

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@author Jerry Urena
@revision 0.2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

//DEFAULT STYLE
export function Loading(props)
{
    const spinnerFront = {
        zIndex: 999,
        marginTop: '45vh',
        color: '#fff',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        transition: 'all 1s',
        visibility: 'visible',
        opacity: 1,
      }
    
    const spinnerBack = {
        zIndex: 998,
        height: '100vh',
        background: '#000',
        position: 'fixed',
        width: '100%',
        transition: 'all 1s',
        visibility: 'visible',
        opacity: 0.7
    }

  
    return (
        <div style={{display: props.isLoading ? 'block' : 'none'}}>
            <div style={spinnerFront}>
                <h2>Loading...</h2>
            </div>
            <div style={spinnerBack}></div>
        </div>
    )
};
