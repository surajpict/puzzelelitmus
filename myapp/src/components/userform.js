import React from 'react'
import { useForm } from 'react-hook-form';
import {default as api} from '../store/apiSlice';

import audio from '../bg-audio.mp3';


export default function Userform() {

    const {register, handleSubmit, resetField} = useForm();
    const [addUser] = api.useAddUserMutation();
    
     
    const onSubmit = async (data) => {
        if(!data) return {};
        await addUser(data).unwrap();
        resetField('name')
        window.scrollBy(0, 220);
        let aud = new Audio(audio)
        aud.loop = true
        aud.play()
    }



  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>enter username</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Enter user name' className='form-input' />
                </div>
                 
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-slate-800 rounded-lg w-1/2'>start</button>
                </div>
            </div>    
        </form>

    </div>
  )
}
