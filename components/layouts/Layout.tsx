
import Head from "next/head"
import { Navbar } from '../ui';

type Props = {
  title?: String,
  children: JSX.Element | JSX.Element[],
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'default App'}</title>
        <meta name="author" content="lert" />
        <meta name="description" content="app information" />
        <meta name="keywords" content="aaa,bbb,ccc" />
      </Head>
      <Navbar></Navbar>
      <main style={{
        padding:"0 20px"
      }}>
        {children}
      </main>
    </>
  )
}