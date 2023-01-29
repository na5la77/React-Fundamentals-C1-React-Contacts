import React from 'react'
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from "form-serialize"


export default function CreateContact({onCreateContact}) {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const values = serializeForm(e.target,{hash: true})

        if (onCreateContact){
            onCreateContact(values);
        }
        console.log(values)
    }
  return (
    <div>
    <Link to='/' className='close-create-contact'>Close</Link>
    <form onSubmit={handleSubmit} className='create-contact-form'>
    <ImageInput className='create-contact-avatar-input' name='avatarURL'/>
    <div className='create-contact-details'>
    <input name='name' placeholder='Name' type='text'/>
    <input name='handle' placeholder='Handle' type='text'/>
    <button type='submit'>Add Contactt</button>
    </div>
    </form>
    </div>
  )
}
