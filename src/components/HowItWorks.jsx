import { Row, Col, Card } from 'antd';
import { SearchOutlined, SettingOutlined, CreditCardOutlined, RocketOutlined } from '@ant-design/icons';

const steps = [
  {
    icon: <SearchOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    number: '01',
    title: 'Choose Destination',
    description: 'Select from 500+ destinations worldwide and set your travel dates.',
  },
  {
    icon: <SettingOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    number: '02',
    title: 'Customize Your Trip',
    description: 'Pick your budget tier and customize hotels, transport, and activities.',
  },
  {
    icon: <CreditCardOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    number: '03',
    title: 'Book & Pay',
    description: 'Review your itinerary and complete secure payment in one click.',
  },
  {
    icon: <RocketOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    number: '04',
    title: 'Start Your Journey',
    description: "Receive your tickets and confirmations. You're ready to travel!",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '96px 24px', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '18px', color: '#8c8c8c', maxWidth: '700px', margin: '0 auto' }}>
            Four simple steps to your perfect adventure
          </p>
        </div>

        <Row gutter={[24, 24]} style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '64px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(to right, #1890ff, #36cfc9, #ff7a45)',
              display: 'none',
            }}
            className="connection-line"
          />

          {steps.map((step, index) => (
            <Col key={index} xs={24} sm={12} lg={6}>
              <Card
                style={{
                  position: 'relative',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                hoverable
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    boxShadow: '0 4px 12px rgba(24, 144, 255, 0.25)',
                  }}
                >
                  {step.number}
                </div>

                <div style={{ marginTop: '32px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.1), rgba(54, 207, 201, 0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    {step.icon}
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#8c8c8c', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .connection-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
