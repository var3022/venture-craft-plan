import { Button, Row, Col, Space } from 'antd';
import { ArrowRightOutlined, RocketOutlined } from '@ant-design/icons';
import heroImage from '../assets/hero-beach.jpg';

export const Hero = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(24, 144, 255, 0.8), rgba(24, 144, 255, 0.6), transparent)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          padding: '0 24px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '24px',
            }}
          >
            <RocketOutlined style={{ color: 'white' }} />
            <span style={{ color: 'white', fontWeight: 500 }}>Your Journey Starts Here</span>
          </div>

          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            Plan Your Dream
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #ff7a45, #ff9c6e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Adventure
            </span>
          </h1>

          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              maxWidth: '700px',
            }}
          >
            Create personalized travel itineraries tailored to your style. From luxury escapes to
            budget-friendly adventures, we've got you covered.
          </p>

          <Space size="large">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              style={{
                height: '56px',
                padding: '0 40px',
                fontSize: '18px',
                background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                border: 'none',
              }}
            >
              Start Planning
            </Button>
            <Button
              size="large"
              style={{
                height: '56px',
                padding: '0 40px',
                fontSize: '18px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
              }}
            >
              Explore Destinations
            </Button>
          </Space>

          <Row gutter={32} style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Col span={8}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>500+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Destinations</div>
            </Col>
            <Col span={8}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>50k+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Happy Travelers</div>
            </Col>
            <Col span={8}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>24/7</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Support</div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '128px',
          background: 'linear-gradient(to top, white, transparent)',
          zIndex: 10,
        }}
      />
    </div>
  );
};
