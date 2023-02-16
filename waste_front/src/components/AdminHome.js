import React from 'react';

function Adminhome() {


    return (

        <div className='adminHome'>

            <div className='rows'>

                <h1 className='h-adminHome'>Home</h1>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/addUser'><h1 className='topic'>User Management</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/addAdmin'><h1 className='topic'>Admin Management</h1></a>
                    </div>


                </div>

            </div>
            
        </div>

    );
}

export default Adminhome;
