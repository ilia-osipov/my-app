import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <div>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Форма обратной связи</h1>
        <div className='input-group mb-3'>
          <input
          {...register('lastName', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я] + $/i

          })}
          type='text'
          className='form-control'
          placeholder='Фамилия'/>
          </div>
          <div className='input-group mb-3'>
          <input
          {...register('firstName', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я] + $/i

          })}
          type='text'
          className='form-control'
          placeholder='Имя'/>
          </div>
          <div className='input-group mb-3'>

<input
          {...register('patronymic', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я] + $/i

          })}
          type='text'
          className='form-control'
          placeholder='Отчество'/>
          </div>
          <div className='input-group mb-3'>

          <input
          {...register('email', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я] + $/i

          })}
          type='text'
          className='form-control'
          placeholder='e-mail'/>


        </div>
        {errors?.lastName?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.lastName?.type === 'maxLength' &&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern' &&(
          <p>Поле заполнено некорректно</p>
        )}


{errors?.firstName?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.firstName?.type === 'maxLength' &&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.firstName?.type === 'pattern' &&(
          <p>Поле заполнено некорректно</p>
        )}
        {errors?.patronymic?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.patronymic?.type === 'maxLength' &&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern' &&(
          <p>Поле заполнено некорректно</p>
        )}
        
      
        <input className='btn btn-primary' type="submit" />
        </form>
    </div>

  )
}

export default Form