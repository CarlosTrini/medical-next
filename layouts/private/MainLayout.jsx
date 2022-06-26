import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import hamburguer from '@/images/icons/hamburguer.svg';
import door from '@/images/icons/door.svg';
import simbol from '@/images/icons/simbol.svg';
import dash from '@/images/icons/dash.svg';
import user from '@/images/icons/user.svg';
import users from '@/images/icons/users.svg';
import medical from '@/images/icons/medical.svg';
import book from '@/images/icons/book.svg';
import down from '@/images/icons/down.svg';
import temp from '@/images/icons/avatar.svg';
import styles from '@/styles/modules/layouts/mainLayout.module.scss';

const MainLayout = ({ children }) => {
  const [showOpt, setShowOpt] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [showToggle, setShowToggle] = useState(false);

  const handleOptions = () => setShowOpt(!showOpt);
  const handleCollapse = () => setCollapse(!collapse);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapse(true);
      setShowToggle(false);
    } else {
      setCollapse(false);
      setShowToggle(true);
    }
  }, []);

  return (
    <>
      <header className={` sys_txt_light ${styles.header}`}>
        <div className={`sys_container ps-2`}>
          <div className={`${styles.header_title}`}>
            <Image src={simbol} alt='medical icon' width={20} height={20} />
            <h1 className='fs-6  sys_txt_light'>Social Medical</h1>
          </div>

          <div className={`${styles.header_info}`}>
            <div
              className={`d-flex justify-content-between align-items-center`}
            >
              <button
                className={`sys_reset_button ${!showToggle && 'd-none'}`}
                title='Ocultar Menú'
                onClick={handleCollapse}
              >
                <Image
                  src={hamburguer}
                  alt='ocultar menú button'
                  width={30}
                  height={30}
                />
              </button>
              <section className='d-flex gap-3 justify-content-end  w-100 '>
                <div>
                  <p className='fw-bold sys_fs_12'>
                    Atendidos: <span>5</span>
                  </p>
                  <p className='fw-bold  sys_fs_12'>
                    Agendados: <span>10</span>
                  </p>
                </div>
                <button className='sys_reset_button' title='salir'>
                  <Image
                    src={door}
                    alt='cerrar sesión button'
                    width={30}
                    height={30}
                  />
                </button>
              </section>
            </div>

            <div>
              <div
                className={`d-flex justify-content-between align-items-center mt-1 ${
                  collapse && styles.header_move_left
                }`}
              >
                <section>
                  <h3 className=' sys_txt_light fw-bold'>Dr. Takeshi</h3>
                  <h4 className='sys_txt_info'>Pediatra</h4>
                </section>
                <section className='sys_txt_light d-flex gap-3'>
                  <h2 className='fw-bold sys_txt_light'>Dasboard</h2>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className={`${styles.aside} ${collapse && styles.aside_hide}`}>
        <div className='text-center mt-2'>
          <Image
            src={temp}
            alt='foto perfil'
            width={collapse ? 25 : 50}
            height={collapse ? 25 : 50}
            className={`${styles.aside_avatar}`}
          />
          <div className='d-flex justify-content-center'>
            {!collapse && (
              <p className='fw-bold sys_txt_light sys_fs_12 me-2'>Bienvenid@</p>
            )}

            <button className='sys_reset_button' onClick={handleOptions}>
              <Image src={down} alt='dashboard icon' width={10} height={15} />
            </button>
            {/* menu button */}
            <div
              className={`${styles.aside_options} ${
                collapse && styles.aside_options_responsive
              } ${showOpt && styles.aside_options_show} `}
            >
              <ul>
                <li className='mb-2'>
                  <Link href='#'>
                    <a>Perfil</a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>Salir</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className='sys_bg_light' />
        </div>
        <div>
          {/* MENU NO RESPONSIVE */}
          <ul className={`${styles.aside_links} ${collapse && 'd-none'} `}>
            <li className={`${styles.aside_active}`}>
              <Image src={dash} alt='dashboard icon' width={15} height={15} />
              <Link href='#'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Image src={user} alt='dashboard icon' width={15} height={15} />
              <Link href='#'>
                <a>Perfil</a>
              </Link>
            </li>
            <li>
              <Image src={users} alt='dashboard icon' width={15} height={15} />
              <Link href='#'>
                <a>Pacientes</a>
              </Link>
            </li>
            <li>
              <Image
                src={medical}
                alt='dashboard icon'
                width={15}
                height={15}
              />
              <Link href='#'>
                <a>Médicos</a>
              </Link>
            </li>
            <li>
              <Image src={book} alt='dashboard icon' width={15} height={20} />
              <Link href='#'>
                <a>Agenda</a>
              </Link>
            </li>
          </ul>

          {/* MENU SI RESPONSIVE */}
          <ul className={`${styles.aside_links} ${!collapse && 'd-none'} `}>
            <li className={`${styles.aside_active}`}>
              <Link href='#'>
                <button className='sys_reset_button'>
                  <Image
                    src={dash}
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                </button>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <button className='sys_reset_button'>
                  <Image
                    src={user}
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                </button>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <button className='sys_reset_button'>
                  <Image
                    src={users}
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                </button>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <button className='sys_reset_button'>
                  <Image
                    src={medical}
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                </button>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <button className='sys_reset_button'>
                  <Image
                    src={book}
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className={`${styles.main} ${collapse && styles.main_collapse}`}>{children}</main>

      <footer className={`${styles.footer}`}></footer>
    </>
  );
};

export default MainLayout;
