import { Layout, Row, Col } from 'antd';
import { RocketOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(24, 144, 255, 0.15)',
                }}
              >
                <RocketOutlined style={{ fontSize: '20px', color: 'white' }} />
              </div>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TravelPlanner
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#8c8c8c' }}>
              Your journey to unforgettable adventures starts here.
            </p>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#destinations" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Destinations
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#how-it-works" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  How It Works
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#packages" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Packages
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#about" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  About Us
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Support</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Help Center
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Terms of Service
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#8c8c8c', textDecoration: 'none' }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={6}>
            <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <MailOutlined style={{ color: '#1890ff' }} />
                <span style={{ fontSize: '14px', color: '#8c8c8c' }}>hello@travelplanner.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <PhoneOutlined style={{ color: '#1890ff' }} />
                <span style={{ fontSize: '14px', color: '#8c8c8c' }}>+1 (555) 123-4567</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <EnvironmentOutlined style={{ color: '#1890ff', marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#8c8c8c' }}>
                  123 Travel Street, Adventure City, AC 12345
                </span>
              </li>
            </ul>
          </Col>
        </Row>

        <div
          style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid #f0f0f0',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '14px', color: '#8c8c8c' }}>
            © {new Date().getFullYear()} TravelPlanner. All rights reserved.
          </p>
        </div>
      </div>
    </AntFooter>
  );
};
