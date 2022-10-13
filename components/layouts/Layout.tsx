import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
    title?: String;
    children: JSX.Element | JSX.Element[];
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'default App'}</title>
                <meta name="author" content="lert" />
                <meta name="description" content="app information" />
                <meta name="keywords" content="aaa,bbb,ccc" />

                <meta property="og:title" content={`pokemon ${title}`} />
                <meta property="og:description" content={`infor ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar></Navbar>
            <main
                style={{
                    padding: '0 20px',
                }}
            >
                {children}
            </main>
        </>
    );
};
