import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Layout from "../src/layouts/Layout";



const Index = () => {
  return (
    <Layout>
      <Home/>
      <About/>
      <Contact/>
    </Layout>
  )
}
export default Index;