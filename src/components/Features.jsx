import { Row, Col, Card } from 'antd';
import {
  StarOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  SafetyOutlined,
} from '@ant-design/icons';

const features = [
  {
    icon: <StarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Smart Itineraries',
    description: 'AI-powered trip planning that adapts to your preferences and budget.',
  },
  {
    icon: <CalendarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Flexible Dates',
    description: 'Find the best times to travel with our intelligent date suggestions.',
  },
  {
    icon: <DollarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Multiple Budgets',
    description: 'Choose from Luxury, Standard, Budget, or fully Customized options.',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Group Planning',
    description: 'Coordinate trips with family and friends seamlessly.',
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: '500+ Destinations',
    description: 'Explore curated destinations from around the world.',
  },
  {
    icon: <SafetyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: 'Secure Booking',
    description: 'Safe and encrypted payment processing for your peace of mind.',
  },
];

export const Features = () => {
  return (
    <section style={{ padding: '96px 24px', background: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            Everything You Need to
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Plan the Perfect Trip
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#8c8c8c', maxWidth: '700px', margin: '0 auto' }}>
            From destination selection to booking confirmations, we handle every detail of your journey.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.1), rgba(54, 207, 201, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#8c8c8c', lineHeight: 1.6 }}>{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
