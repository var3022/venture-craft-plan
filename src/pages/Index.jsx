import { Layout } from 'antd';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { PricingTiers } from '../components/PricingTiers';
import { Footer } from '../components/Footer';

const { Content } = Layout;

const Index = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ marginTop: '64px' }}>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingTiers />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Index;
