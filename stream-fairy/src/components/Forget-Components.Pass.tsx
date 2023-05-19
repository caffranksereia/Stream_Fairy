
import React, { FC, useState } from 'react';


export const ForgotPasswordComponents: FC= ({
}) => {

    return (
       <div>
         <form>
            <div>
                <input
                   name='Password'
                   value="Password"
                   type='text'
                />
                    <input
                   name='Password Confirm'
                   value= "Confirma Password"
                   type='text'
                />

                <button>
                    salve
                </button>
            </div>
        </form>
       </div>
       
    );
};

