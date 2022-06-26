import React, { useState } from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Radio, Input } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { Alert } from 'antd';

const initLogin = {
  user: '',
  password: '',
  type: 'patient',
};

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);

  const [errorForm, setErrorForm] = useState(false);
  const [formData, setFormData] = useState(initLogin);
  const { user, password, type } = formData;
  const [role, setRole] = useState('patient');

  const handleModeChange = (e) => {
    setRole(e.target.value);
    setFormData({ ...formData, type: e.target.value });
  };

  const onHandleInputs = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if ([user, password, type].includes('')) return setErrorForm(true);
    setErrorForm(false);

    console.log(formData);
  };

  return (
    <>
      <main
        style={{
          minHeight: '100vh',
          background: 'url(images/login.jpg) center/cover no-repeat',
        }}
        className='d-flex align-items-center justify-content-center p-4 '
      >
        {errorForm && (
          <Alert
            message='Todos los campos son obligatorios.'
            type='error'
            showIcon
            closable
            className='sys_toastr sys_bg_error'
            // afterClose={() => setErrorForm(false)}
            onClose={() => setErrorForm(false)}
          />
        )}
        <form
          className='col-12 col-sm-8 col-md-5 col-lg-4 d-grid gap-3 p-3 rounded sys_bg_light position-relative'
          onSubmit={onHandleSubmit}
        >
          <Radio.Group
            onChange={handleModeChange}
            value={role}
            buttonStyle='solid'
            className='position-absolute'
            style={{ top: '-27px' }}
          >
            <Radio.Button value='patient'>Paciente</Radio.Button>
            <Radio.Button value='doctor'>Médico</Radio.Button>
          </Radio.Group>

          <legend className='fs-2 fw-bold sys_txt_info text-center'>
            {role === 'patient' ? 'Paciente' : 'Médico'}
          </legend>
          <div>
            <label
              htmlFor='user'
              className='fw-bold fs-5 mb-2 sys_txt_oxford_blue'
            >
              Usuario:
            </label>
            <div className='d-flex align-items-center p-1 rounded '>
              <i
                aria-hidden='true'
                className='fas fa-user-check me-2 fs-5 sys_txt_oxford_blue'
              />
              <Input
                type='text'
                className=' w-100 p-2 border-0 bg-transparent border-bottom border-primary'
                placeholder='Coloca tu nombre'
                name='user'
                id='user'
                value={user}
                onChange={onHandleInputs}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='pasword'
              className='fw-bold fs-5 mb-2 sys_txt_oxford_blue'
            >
              Contraseña:
            </label>
            <div className='d-flex align-items-center p-1 rounded '>
              <i
                aria-hidden='true'
                className='fas fa-key me-2 fs-5 sys_txt_oxford_blue'
              />
              <Input.Password
                placeholder='Coloca tu nombre'
                bordered='false'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                name='password'
                id='password'
                value={password}
                onChange={onHandleInputs}
                className=' w-100 p-2 border-0 bg-transparent border-bottom border-primary'
              />
            </div>
            <div className='mt-3 d-flex justify-content-evenly align-items-center'>
              <button
                type='submit'
                className='btn sys_bg_info text-light fw-bold'
              >
                Ingresar
              </button>
              <a href='#' className='fs-6 sys_txt_info'>
                Olvidé mi contraseña
              </a>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
