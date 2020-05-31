import React from 'react';

export default function Nav(){
    return(
        <>
      <header className="site-header" id="site-header">
        <div className="logo">
            <a href="/">
                <div className="screen-reader-text">CSS-Tricks</div>
                    <svg className="icon-logo-star" width="35px" height="35px" viewBox='0 0 362.62 388.52'>
                        <path d="M156.58 239l-88.3 64.75c-10.59 7.06-18.84 11.77-29.43 11.77-21.19 0-38.85-18.84-38.85-40 0-17.69 14.13-30.64 27.08-36.52l103.6-44.74-103.6-45.92C13 142.46 0 129.51 0 111.85 0 90.66 18.84 73 40 73c10.6 0 17.66 3.53 28.25 11.77l88.3 64.75-11.74-104.78C141.28 20 157.76 0 181.31 0s40 18.84 36.5 43.56L206 149.52l88.3-64.75C304.93 76.53 313.17 73 323.77 73a39.2 39.2 0 0138.85 38.85c0 18.84-12.95 30.61-27.08 36.5l-103.61 45.91L335.54 239c14.13 5.88 27.08 18.83 27.08 37.67 0 21.19-18.84 38.85-40 38.85-9.42 0-17.66-4.71-28.26-11.77L206 239l11.77 104.78c3.53 24.72-12.95 44.74-36.5 44.74s-40-18.84-36.5-43.56z"></path>
                    </svg>

                    <svg className="icon-logo-text" width="214px" height="35px" viewBox='0 0 474.15 58.26'>
                        <path d="M46 42.57a4.5 4.5 0 00-3 1.13c-4.1 3.46-8.13 5.39-14.08 5.39-10.78 0-18.58-8.93-18.58-20V29c0-11 7.88-19.87 18.58-19.87a20.42 20.42 0 0113.48 5.03 4.95 4.95 0 007.88-3.86 4.94 4.94 0 00-1.93-3.94C43.44 2.57 37.73 0 29 0 12 0 0 13.12 0 29.13v.16c0 16.17 12.23 29 28.64 29 9.09 0 15.12-2.9 20.43-7.56a4.76 4.76 0 001.61-3.54A4.71 4.71 0 0046 42.57zm36.86-17.95C72 22 69.43 20.12 69.43 15.77v-.16c0-3.7 3.38-6.68 9.17-6.68 4.43 0 8.61 1.45 13 4.26a4.78 4.78 0 002.57.72 4.6 4.6 0 004.67-4.59 4.47 4.47 0 00-2.17-3.94A31 31 0 0078.76.16C67.58.16 59.53 6.84 59.53 16.5v.16c0 10.38 6.76 13.92 18.74 16.82C88.73 35.89 91 38.06 91 42.08v.16c0 4.18-3.86 7.08-10 7.08a24.42 24.42 0 01-15.77-5.79 4.79 4.79 0 00-7.56 3.7A4.64 4.64 0 0059.61 51a35.05 35.05 0 0021.16 7.1c11.83 0 20.11-6.28 20.11-16.82v-.16c0-9.34-6.11-13.6-18.02-16.5zm49.88 0c-10.86-2.57-13.43-4.51-13.43-8.85v-.16c0-3.7 3.38-6.68 9.17-6.68 4.42 0 8.61 1.45 13 4.26a4.78 4.78 0 002.57.72 4.6 4.6 0 004.67-4.59 4.47 4.47 0 00-2.17-3.94A31 31 0 00128.64.16c-11.18 0-19.23 6.68-19.23 16.33v.16c0 10.38 6.76 13.92 18.74 16.82 10.46 2.41 12.71 4.59 12.71 8.61v.16c0 4.18-3.86 7.08-10 7.08a24.42 24.42 0 01-15.77-5.79 4.79 4.79 0 00-7.56 3.7 4.64 4.64 0 001.96 3.77 35.05 35.05 0 0021.16 7.08c11.83 0 20.11-6.28 20.11-16.82v-.16c0-9.32-6.11-13.58-18.02-16.48zm45.62 3.22h-15.13a4.79 4.79 0 000 9.58h15.12a4.79 4.79 0 000-9.58zM224 1h-37.45a4.59 4.59 0 000 9.17h13.68v42.62a5 5 0 0010 0V10.14H224A4.59 4.59 0 00224 1zm38.86 0h-20.15a4.91 4.91 0 00-5 5v46.79a4.95 4.95 0 009.89 0V37.66h12.47l13.68 17.46a5.65 5.65 0 004.83 2.58 4.67 4.67 0 004.75-4.59 5.74 5.74 0 00-1.61-3.78l-10.78-13.6c7.56-2.33 12.79-7.81 12.79-16.82v-.16a17 17 0 00-4.66-12.15C275.45 3.06 269.9 1 262.82 1zm10.86 18.51c0 5.71-4.51 9.41-11.58 9.41h-14.53V10H262c7.32 0 11.67 3.3 11.67 9.33zm27-18.91a4.89 4.89 0 00-5 4.91v47.28a4.95 4.95 0 009.89 0V5.47a4.88 4.88 0 00-4.98-4.91zm62.67 42a4.5 4.5 0 00-3 1.13c-4.1 3.46-8.13 5.39-14.08 5.39-10.78 0-18.58-8.93-18.58-20V29c0-11 7.88-19.87 18.58-19.87a20.42 20.42 0 0113.44 5.07 4.95 4.95 0 007.88-3.86 4.94 4.94 0 00-1.93-3.94C360.72 2.57 355 0 346.32 0c-17.06 0-29 13.12-29 29.13v.16c0 16.17 12.23 29 28.64 29 9.09 0 15.12-2.9 20.43-7.56a4.76 4.76 0 001.61-3.58 4.71 4.71 0 00-4.7-4.58zm41-16.82l17.54-16.9a4.81 4.81 0 001.77-3.7A4.53 4.53 0 00419 .56a5.2 5.2 0 00-4.1 1.85l-26.66 26.88V5.47a4.95 4.95 0 00-9.9 0v47.32a4.95 4.95 0 009.9 0V41.12l9.17-8.85 18.1 23.09a5 5 0 004.18 2.33 4.83 4.83 0 005-4.83 5.36 5.36 0 00-1.37-3.54zm51.8-1.13c-10.92-2.65-13.49-4.53-13.49-8.88v-.16c0-3.7 3.38-6.68 9.17-6.68 4.42 0 8.61 1.45 13 4.26a4.78 4.78 0 002.57.72 4.6 4.6 0 004.67-4.59 4.47 4.47 0 00-2.17-3.94A31 31 0 00452 .16c-11.15 0-19.2 6.68-19.2 16.34v.16c0 10.38 6.76 13.92 18.74 16.82 10.46 2.41 12.71 4.59 12.71 8.61v.16c0 4.18-3.86 7.08-10 7.08a24.42 24.42 0 01-15.77-5.79 4.79 4.79 0 00-7.56 3.7 4.64 4.64 0 001.96 3.76A35.05 35.05 0 00454 58.1c11.83 0 20.11-6.28 20.11-16.82v-.16c.04-9.34-6.11-13.6-17.98-16.5z"></path>
                    </svg>
            </a>
        </div>
        <div className="header-middle-area">
            <nav className="main-nav" id="main-nav">
                <ul className="main-sections">
                    <li className="articles">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M8.93 100A8.81 8.81 0 010 91.38V51.72h17.86v39.66A8.81 8.81 0 018.93 100z" fill="#e26b00"></path>
                                <path d="M17.86 0H100v18.97H17.86z" fill="#cec9ae"></path>
                                <path d="M17.86 0H100v18.97H17.86z" fill="#cec9ae"></path>
                                <path d="M17.86 60.34v31A8.81 8.81 0 018.93 100h82.16a8.76 8.76 0 008.91-8.6v-69H17.86z" fill="#ff8200"></path>
                                <path d="M28.58 27.86h21.43v23.47H28.58z" fill="#cec9ae"></path>
                                <path d="M28.58 27.86h21.43v23.47H28.58z" fill="#cec9ae"></path>
                                <g fill="#edeada"><path d="M86.21 31.31H58.62a1.73 1.73 0 010-3.45h27.59a1.73 1.73 0 010 3.45zM86.21 41.32H58.62a1.73 1.73 0 010-3.45h27.59a1.73 1.73 0 010 3.45zM86.21 51.33H58.62a1.72 1.72 0 110-3.44h27.59a1.72 1.72 0 110 3.44zM86.24 61.34h-56a1.72 1.72 0 010-3.44h56a1.72 1.72 0 010 3.44zM57.15 71.36H30.36a1.73 1.73 0 110-3.45h26.79a1.73 1.73 0 110 3.45zM57.15 81.37H30.36a1.73 1.73 0 110-3.45h26.79a1.73 1.73 0 110 3.45zM57.15 91.38H30.36a1.73 1.73 0 110-3.45h26.79a1.73 1.73 0 110 3.45z"></path></g>
                                <path d="M67.24 67.91h20.69v23.8H67.24z" fill="#cec9ae"></path>
                                <path d="M31.19 6h48.27a3.44 3.44 0 013.45 3.4 3.45 3.45 0 01-3.45 3.45H31.19a3.46 3.46 0 01-3.45-3.45A3.45 3.45 0 0131.19 6z" fill="#606060"></path>

                            </svg>
                            <span>Articles</span>
                        </a>
                    </li>
                    <li className="videos">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M72.42 50h10.34v34.48H72.42z" fill="#606060"></path>
                                <path d="M58.63 41.38a20.69 20.69 0 10-19-28.94 20.69 20.69 0 10-19 28.94l19 5.17z" fill="#e26b00"></path>
                                <circle cx="20.7" cy="20.69" fill="#edeada" r="13.79"></circle>
                                <circle cx="58.63" cy="20.69" fill="#edeada" r="13.79"></circle>
                                <path d="M48.28 93.1h19a6.89 6.89 0 006.89-6.89V48.28a6.9 6.9 0 00-6.89-6.9h-55.2a6.9 6.9 0 00-6.9 6.9v37.93a6.89 6.89 0 006.9 6.89zM81 84.35l13.37 11.29A3.44 3.44 0 00100 93V41.25a3.44 3.44 0 00-5.63-2.67L81 49.87z" fill="#ff8200"></path>
                                <g fill="#606060"><rect height="15.52" rx="1.72" width="17.24" x="31.04" y="84.48"></rect><path d="M15.52 51.73H63.8a3.45 3.45 0 013.45 3.44 3.45 3.45 0 01-3.45 3.45H15.52a3.44 3.44 0 01-3.44-3.45 3.44 3.44 0 013.44-3.44zM20.7 67.24h-8.62a1.73 1.73 0 110-3.45h8.62a1.73 1.73 0 010 3.45zM15.52 74.14h-3.44a1.73 1.73 0 110-3.45h3.44a1.73 1.73 0 110 3.45z"></path></g>
                                <circle cx="20.7" cy="20.69" fill="#f4006e" r="5.17"></circle>
                                <circle cx="20.7" cy="20.69" fill="#f4006e" r="5.17"></circle>
                            </svg>
                            <span>Videos</span>
                        </a>
                    </li>
                    <li className="almanac">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M48.45 15.78L79.71 7.4a3.45 3.45 0 014.22 2.45l4.45 16.62 2 7.53 9.48 35.34a3.46 3.46 0 01-2.43 4.23l-19 5.08z" fill="#e26b00"></path>
                                <path d="M19.45 9.19a3.36 3.36 0 012.76-.44l66.62 17.84a3.45 3.45 0 012.43 4.22L73.42 97.43a3.45 3.45 0 01-4.23 2.43L2.57 82a3.46 3.46 0 01-2.43-4.2l14.35-53.56z" fill="#ff8200"></path>
                                <g fill="#edeada"><path d="M78 38.8a1.61 1.61 0 01-.44-.06L53 32.17a1.72 1.72 0 01.9-3.33l24.52 6.58a1.71 1.71 0 011.26 1.89 1.73 1.73 0 01-1.7 1.5zM75.3 48.8a1.63 1.63 0 01-.45-.06l-16.67-4.46a1.72 1.72 0 01-.78-2.89 1.69 1.69 0 011.67-.39l16.67 4.46a1.72 1.72 0 01-.44 3.39zM72.62 58.8a1.61 1.61 0 01-.44-.06l-20.74-5.57a1.72 1.72 0 11.89-3.33l20.74 5.57a1.72 1.72 0 01-.45 3.39zM21.65 55.84a1.74 1.74 0 01-.45-.06l-5-1.34a1.72 1.72 0 11.89-3.33l5 1.34a1.72 1.72 0 01-.45 3.39zM69.94 68.78a1.61 1.61 0 01-.44-.06L31.19 58.45a1.72 1.72 0 11.9-3.33l38.3 10.26a1.72 1.72 0 01-.45 3.39zM19 65.83a1.74 1.74 0 01-.45-.06l-5-1.33a1.73 1.73 0 01.9-3.34l5 1.34a1.72 1.72 0 01-.45 3.39zM67.27 78.77a1.74 1.74 0 01-.45-.06L28.51 68.45a1.72 1.72 0 01.9-3.33l38.3 10.26a1.72 1.72 0 01-.44 3.39z"></path></g>
                                <path d="M50 52.14l-11.41-3.79 9.76-9.76L52.14 50A1.73 1.73 0 0150 52.14z" fill="#bdc3c7"></path>
                                <path d="M50 52.14l-11.41-3.79 9.76-9.76L52.14 50A1.73 1.73 0 0150 52.14z" fill="#bdc3c7"></path>
                                <path d="M48.35 38.59l-3.66 3.65-2.43 2.43-3.65 3.66-26.83-26.79 3.67-3.66 2.43-2.43 3.66-3.67z" fill="#f4006e"></path>
                                <path d="M6.9 16.66l9.76-9.76 4.88 4.88-9.76 9.76z" fill="#bdc3c7"></path>
                                <path d="M24 24a1.76 1.76 0 01-1.22.5 1.7 1.7 0 01-1.21-.5l-6.09-6.09 2.43-2.43L24 21.54A1.72 1.72 0 0124 24zM44.69 42.24l-2.43 2.43L26.4 28.85a1.73 1.73 0 112.45-2.45z" fill="#c03a2b"></path>

                           
                            </svg>
                            <span>Almanac</span>
                        </a>
                    </li>
                    <li className="newsletter">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M100 32.76L59.53 66.38l-1.84 1.54a12 12 0 01-15.38 0l-1.84-1.54L0 32.76l15.52-11L34.07 8.62l8.24-5.84a12 12 0 0115.38 0l8.24 5.84 18.55 13.14z" fill="#e26b00"></path>
                                <path d="M84.48 81V10.35a1.84 1.84 0 00-1.91-1.73H17.43a1.84 1.84 0 00-1.91 1.73V81z" fill="#edeada"></path>
                                <path d="M52.14 56.88a37.92 37.92 0 01-11.39-1.79 17.2 17.2 0 01-11.44-13c-1.31-6.3 1.06-12.91 6.49-18.18.58-.57 1.18-1.11 1.81-1.63a22 22 0 0120-4.32 16.77 16.77 0 0111.66 15.41 15.9 15.9 0 01-3.71 11.22A8.72 8.72 0 0157 47.72a5 5 0 01-3.17-2.2 4.68 4.68 0 01-.45-3.64c1.51-5.7 3-14.36 3.05-14.44a1.73 1.73 0 012.81-1 1.73 1.73 0 01.62 1.56c-.06.37-1.57 8.9-3.12 14.73a1.27 1.27 0 00.08 1 1.52 1.52 0 001 .61 5.34 5.34 0 005.14-2 12.4 12.4 0 002.87-8.77 13.36 13.36 0 00-9.24-12.3 18.44 18.44 0 00-16.78 3.69c-.55.46-1.09.94-1.61 1.44-2.68 2.61-7 8-5.52 15a14 14 0 009.11 10.4c8.09 2.58 19.71 2.89 25.83-4.72a1.73 1.73 0 012.69 2.16c-4.53 5.63-11.42 7.64-18.17 7.64z" fill="#f4006e"></path>
                                <path d="M52.14 56.88a37.92 37.92 0 01-11.39-1.79 17.2 17.2 0 01-11.44-13c-1.31-6.3 1.06-12.91 6.49-18.18.58-.57 1.18-1.11 1.81-1.63a22 22 0 0120-4.32 16.77 16.77 0 0111.66 15.41 15.9 15.9 0 01-3.71 11.22A8.72 8.72 0 0157 47.72a5 5 0 01-3.17-2.2 4.68 4.68 0 01-.45-3.64c1.51-5.7 3-14.36 3.05-14.44a1.73 1.73 0 012.81-1 1.73 1.73 0 01.62 1.56c-.06.37-1.57 8.9-3.12 14.73a1.27 1.27 0 00.08 1 1.52 1.52 0 001 .61 5.34 5.34 0 005.14-2 12.4 12.4 0 002.87-8.77 13.36 13.36 0 00-9.24-12.3 18.44 18.44 0 00-16.78 3.69c-.55.46-1.09.94-1.61 1.44-2.68 2.61-7 8-5.52 15a14 14 0 009.11 10.4c8.09 2.58 19.71 2.89 25.83-4.72a1.73 1.73 0 012.69 2.16c-4.53 5.63-11.42 7.64-18.17 7.64z" fill="#f4006e"></path>
                                <path d="M46.23 47.94a7.84 7.84 0 01-5-1.69c-3.34-2.65-3.43-7.25-2.5-10.38a15.81 15.81 0 011.25-3 14.12 14.12 0 015.92-6.15 8.16 8.16 0 019.59 1.55A12.88 12.88 0 0158.24 33 1.73 1.73 0 0155 34.15a9.58 9.58 0 00-2-3.51 4.68 4.68 0 00-5.58-.83A10.76 10.76 0 0043 34.52a12.28 12.28 0 00-1 2.34c-.67 2.26-.52 5.22 1.33 6.7 2 1.62 5.43.94 7.35-.72a19.17 19.17 0 003.64-4.43 1.73 1.73 0 011.53-.84 1.75 1.75 0 011.48.92 1.72 1.72 0 01-.08 1.74A23 23 0 0153 45.45a10.6 10.6 0 01-6.74 2.49z" fill="#f4006e"></path>
                                <path d="M100 32.76v63.8a3.38 3.38 0 01-1.12 2.51 3.28 3.28 0 01-2.33.93H3.45a3.28 3.28 0 01-2.33-.93A3.38 3.38 0 010 96.56v-63.8l40.47 33.62 1.84 1.54a12 12 0 0015.38 0l1.84-1.54z" fill="#ff8200"></path>

                            </svg>
                            <span>Newsletter</span>
                        </a>
                    </li>
                    <li className="guides">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M99 22.22l-6.58-2V19a19.2 19.2 0 00-1.73-7.89A19 19 0 0054.39 19v1.94l-3.77 1.5a1.56 1.56 0 01-1.27 0L28.21 14a1.43 1.43 0 00-.58-.12 1.94 1.94 0 00-.59 0L1.19 22.22A1.73 1.73 0 000 24v73.67a1.71 1.71 0 00.72 1.39 1.7 1.7 0 001.54.25l24.78-8a1.94 1.94 0 01.59 0 2.34 2.34 0 01.58.14l21.22 8.46a1.77 1.77 0 001.28 0l21.22-8.6a1.88 1.88 0 01.58 0 1.94 1.94 0 01.59 0l24.78 8a1.73 1.73 0 002.26-1.64V24A1.73 1.73 0 0099 22.22z" fill="#ff8200"></path>
                                <path d="M72.51 60.2v31.08a2.34 2.34 0 00-.58.14l-21.22 8.46a1.73 1.73 0 01-.64 0V22.57a2 2 0 00.64-.14l3.76-1.5a38.87 38.87 0 006 18.55c.15.26.31.49.48.75a49.2 49.2 0 006 7.49c-2.85 1.17-4.74 3.23-4.74 5.58 0 3.64 4.55 6.61 10.35 6.9zM27.63 13.83v77.45a1.94 1.94 0 00-.59 0l-24.78 8a1.7 1.7 0 01-1.54-.25A1.71 1.71 0 010 97.67V24a1.73 1.73 0 011.19-1.73l25.9-8.37a2 2 0 01.54 0z" fill="#ffae64"></path>
                                <path d="M92.4 19v1.18a38.46 38.46 0 01-6.07 19.31c-.14.26-.31.49-.47.75a48.36 48.36 0 01-6 7.52 43.66 43.66 0 01-6.44 5.55 44.18 44.18 0 01-6.47-5.67 48 48 0 01-6-7.49c-.18-.26-.33-.48-.49-.74a39 39 0 01-6-18.47V19a19 19 0 0138 0z" fill="#f4006e"></path>
                                <ellipse cx="73.29" cy="18.77" fill="#fff" rx="11.96" ry="12.09"></ellipse>
                                <path d="M41 80.06l3.59-5a1.7 1.7 0 00.28-1.79 1.72 1.72 0 00-3.1-.27l-2.92 4.08L35.93 73a1.73 1.73 0 00-2.32-.28 1.75 1.75 0 00-.48 2.28l3.59 5-3.59 5a1.73 1.73 0 00.4 2.4 1.78 1.78 0 001 .33 1.75 1.75 0 001.4-.73l2.92-4 2.92 4.07a1.75 1.75 0 001.39.73 1.84 1.84 0 001-.33 1.73 1.73 0 00.39-2.4zM15.07 33.44l3.6-5a1.72 1.72 0 00-1.2-2.84 1.71 1.71 0 00-1.6.84L13 30.47l-3-4.07a1.72 1.72 0 00-2.79 2l3.59 5-3.59 5a1.72 1.72 0 102.79 2l3-3.99 2.92 4.08a1.71 1.71 0 002.4.39 1.73 1.73 0 00.4-2.4z" fill="#f4006e"></path>
                                <path d="M84.6 53.3c0 3.81-5 6.9-11.22 6.9h-.87c-5.8-.27-10.35-3.24-10.35-6.9 0-2.35 1.89-4.41 4.78-5.67a44.18 44.18 0 006.47 5.67 44.43 44.43 0 006.46-5.63c2.87 1.24 4.73 3.3 4.73 5.63z" fill="#606060"></path>
                                <g fill="#f4006e"><path d="M13.81 53.3a1.73 1.73 0 01-1.72-1.73v-3.45a1.73 1.73 0 113.45 0v3.45a1.73 1.73 0 01-1.73 1.73zM13.81 63.66a1.73 1.73 0 01-1.72-1.73v-3.45a1.73 1.73 0 113.45 0v3.45a1.73 1.73 0 01-1.73 1.73zM13.81 74a1.72 1.72 0 01-1.72-1.72v-3.44a1.73 1.73 0 113.45 0v3.45A1.72 1.72 0 0113.81 74zM38 48.12a1.73 1.73 0 01-1.72-1.73v-3.45a1.73 1.73 0 113.45 0v3.45A1.73 1.73 0 0138 48.12zM38 58.48a1.73 1.73 0 01-1.72-1.73V53.3a1.73 1.73 0 113.45 0v3.45A1.73 1.73 0 0138 58.48zM38 68.84a1.73 1.73 0 01-1.72-1.73v-3.45a1.73 1.73 0 113.45 0v3.45A1.73 1.73 0 0138 68.84zM14 84.37h-.18a1.72 1.72 0 01-1.72-1.72v-3.46a1.73 1.73 0 013.45 0v1.13l1.17-.4a1.73 1.73 0 111.11 3.28l-3.28 1.17a1.69 1.69 0 01-.55 0zM24.17 80.92a1.73 1.73 0 01-1.64-1.17 1.8 1.8 0 01.09-1.33 1.75 1.75 0 011-.87l3.28-1.08a1.73 1.73 0 011.1 3.28l-3.26 1.17a2.62 2.62 0 01-.56 0zM38 37.76A1.72 1.72 0 0136.26 36v-3.42A1.73 1.73 0 0138 30.85h.18a1.76 1.76 0 01.55.09L42 32a1.73 1.73 0 01-1.1 3.28l-1.18-.4V36A1.72 1.72 0 0138 37.76z"></path></g>
                                <path d="M73.29 32.58A13.81 13.81 0 1187 18.77a13.8 13.8 0 01-13.71 13.81zm0-24.17a10.36 10.36 0 1010.24 10.36A10.34 10.34 0 0073.29 8.41z" fill="#606060"></path>
                            </svg>
                            <span>Guides</span>
                        </a>
                    </li>
                    <li className="books">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M9.75 90L.18 35.69a12 12 0 0110.19-14.06l18.47-3.26-.5 71.63z" fill="#f4006e"></path>
                                <path d="M80.83 87.64a3.45 3.45 0 01-2.74 2.59l-54.36 9.59A12.1 12.1 0 019.57 88.44a12.32 12.32 0 019.68-12.31l15.23 4.27-13.73 2.43a5.19 5.19 0 00-3.93 7A5.32 5.32 0 0022.75 93l41.54-7.33z" fill="#af045a"></path>
                                <path d="M34.46 80.4l-13.71 2.43a5.19 5.19 0 00-3.93 7A5.32 5.32 0 0022.75 93l41.54-7.33z" fill="#edeada"></path>
                                <path d="M22 57.19l9.58-54.34a3.48 3.48 0 014-2.8l53.94 9.51A12.36 12.36 0 0199.89 22a12.11 12.11 0 01-.17 1.58L90.13 78z" fill="#ff8200"></path>
                                <path d="M78.24 18.05h-.3l-39.06-6.91a1.72 1.72 0 01.6-3.39l39.06 6.88a1.72 1.72 0 01-.3 3.42zM70 25.34a1.53 1.53 0 01-.3 0l-25.53-4.51a1.73 1.73 0 01.6-3.4l25.48 4.48a1.73 1.73 0 01-.3 3.43z" fill="#edeada"></path>
                                <path d="M99.89 22a10.47 10.47 0 01-.18 1.58L90.13 78l-13.3-4 7.71-43.7 1.83-10.31 1.86-10.65 1.29.22A12.37 12.37 0 0199.89 22z" fill="#e26b00"></path>
                                <path d="M79.93 63.9L26 54.4a3.05 3.05 0 00-.6-.06 3.45 3.45 0 00-.59 6.85l54.34 9.57a5.19 5.19 0 013.91 7 5.29 5.29 0 01-5.91 3.16L23 71.38a4.07 4.07 0 00-.61 0 3.45 3.45 0 00-.6 6.85l54.36 9.57a12.09 12.09 0 0014.17-11.42A12.38 12.38 0 0079.93 63.9z" fill="#e26b00"></path>
                                <path d="M83.05 77.76a5.29 5.29 0 01-5.91 3.16L23 71.38l1.8-10.19 54.34 9.57a5.19 5.19 0 013.91 7z" fill="#edeada"></path>
                            </svg>
                            <span>Books</span>
                        </a>
                    </li>
                    <li className="account">
                        <a href="#">
                            <svg width="30" height="30" viewBox='0 0 100 100'>
                                <path d="M35.12 78.4L20.2 86.54a14.14 14.14 0 00-2.39 1.7 50 50 0 0064.2.17 13.57 13.57 0 00-2.63-1.76l-16-8A6.09 6.09 0 0160 73.21v-6.27A23 23 0 0061.55 65a37 37 0 005-10 5 5 0 003.56-4.77v-6.7a5 5 0 00-1.67-3.71v-9.67s2-15-18.4-15-18.43 15-18.43 15v9.67a5 5 0 00-1.67 3.71v6.69a5 5 0 002.31 4.21 33.09 33.09 0 006 12.51v6.12a6.09 6.09 0 01-3.13 5.34z" fill="#edeada"></path>
                                <path d="M50.86 0a50 50 0 00-33 88.22 13 13 0 012.37-1.69l14.89-8.13a6.08 6.08 0 003.17-5.34v-6.12a33.19 33.19 0 01-6-12.51 5 5 0 01-2.31-4.21v-6.69a5 5 0 011.67-3.71v-9.67s-2-15.06 18.4-15.06S68.4 30.15 68.4 30.15v9.67a5 5 0 011.67 3.71v6.69A5 5 0 0166.51 55a36.72 36.72 0 01-5 10c-.55.77-1.06 1.43-1.51 1.94v6.27a6.1 6.1 0 003.37 5.45l16 8A13.06 13.06 0 0182 88.41 50 50 0 0050.86 0z" fill="#ff8200"></path>

                            </svg>
                            <span>Account</span>
                        </a>
                    </li>
                </ul>
                <hr className="squiggle"/>
                <div className="mobile-other-nav">
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    <a href="#">Archives</a>
                    <a href="#">Advertise</a>
                    <a href="#">Jobs</a>
                    <a href="#">License</a>
                    <a href="#">Subscribe</a>
                    <a href="#">Guest Posting</a>
                </div>
                <div className="mobile-social">
                    <a href="#" className="social-link-facebook">
                    <span className="screen-reader-text">Facebook</span>
                    <svg className="logo-facebook" width="20px" height="20px">
                    
                    </svg>
                    </a>
                    <a href="#" className="social-link-twitter">
                    <span className="screen-reader-text">Twitter</span>
                    <svg className="logo-twitter" width="20px" height="20px">
                    
                    </svg>
                    </a>
                    <a href="#" className="social-link-youtube">
                    <span className="screen-reader-text">YouTube</span>
                    <svg className="logo-youtube" width="20px" height="20px">
                    
                    </svg>
                    </a>
                    <a href="#" className="social-link-instagram">
                    <span className="screen-reader-text">Instagram</span>
                    <svg className="logo-instagram" width="20px" height="20px">
                    
                    </svg>
                    </a>
                    <a href="#" className="social-link-rss">
                    <span className="screen-reader-text">RSS</span>
                    <svg className="logo-rss" width="20px" height="20px">
                    
                    </svg>
                    </a>
                    </div>
             </nav>
        </div>
        <div className="search" role="search" id="search-area">
        <div className="chw-widget"><form role="search" method="get" id="searchform" className="search-form">
        <label className="screen-reader-text" id="search-label" for="search-input">Search for:</label>
        <input type="search" required="" name="s" id="search-input" className="search-field" placeholder="e.g. flexbox" value=""/>
        <input type="hidden" name="orderby" value="relevance"/>
        <input type="hidden" name="post_type" value="post,page,guide"/>
        <button type="submit" className="button-search">
        <span className="screen-reader-text">Search</span>
        <svg className="icon-search" width="20px" height="20px" viewBox='0 0 100 100'>
            <path d="M80.65 66.78a33.55 33.55 0 01-47.44-47.44 33.55 33.55 0 1147.44 47.44zm6.73-54.16a43.06 43.06 0 00-65.32 55.71L2 88.39A6.8 6.8 0 0011.61 98l20.06-20.06a43.06 43.06 0 0055.71-65.32z"></path>
        </svg>
        </button>
        </form></div> </div>
        <div className="mobile-actions" id="mobile-actions">
        <button className="search-opener" id="search-opener">
        <span className="screen-reader-text">Open Search</span>
        <svg className="icon-search" width="26px" height="26px">
        
        </svg>
        <svg className="icon-search-close" width="26px" height="26px">
        
        </svg>
        </button>
        <button id="mobile-nav-button" className="mobile-nav-button">
        <span className="screen-reader-text">Open Navigation</span>
        <svg className="icon-burger" width="28px" height="28px">
        
        </svg>
        <svg className="icon-close" width="28px" height="28px">
        
        </svg>
        </button>
        </div>
    </header>

        </>
        )
}