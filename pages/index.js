import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";



const Index = () => {
  return (
    <Layout>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Layout>
  )
}
export default Index;