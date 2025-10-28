import { Row, Col, Card, Button, Badge } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const tiers = [
  {
    name: 'Budget',
    price: 'From $499',
    description: 'Perfect for solo travelers and backpackers',
    features: [
      'Economy flights',
      'Budget-friendly hotels',
      'Public transport options',
      'Basic travel insurance',
      '24/7 support',
    ],
  },
  {
    name: 'Standard',
    price: 'From $1,299',
    description: 'Ideal for families and couples',
    features: [
      'Standard flights',
      '3-4 star hotels',
      'Mix of transport options',
      'Comprehensive insurance',
      'Priority support',
      'Restaurant recommendations',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    price: 'From $3,499',
    description: 'For those seeking the finest experience',
    features: [
      'Business/First class flights',
      '5-star hotels & resorts',
      'Private transfers',
      'Premium insurance',
      'Concierge service',
      'Exclusive experiences',
      'VIP airport lounge access',
    ],
  },
];

export const PricingTiers = () => {
  return (
    <section id="packages" style={{ padding: '96px 24px', background: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            Choose Your Travel Style
          </h2>
          <p style={{ fontSize: '18px', color: '#8c8c8c', maxWidth: '700px', margin: '0 auto' }}>
            Every journey is unique. Select the tier that matches your preferences and budget.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {tiers.map((tier, index) => (
            <Col key={index} xs={24} md={8}>
              <Badge.Ribbon
                text="Most Popular"
                color="volcano"
                style={{ display: tier.popular ? 'block' : 'none' }}
              >
                <Card
                  style={{
                    height: '100%',
                    textAlign: 'center',
                    transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s',
                    boxShadow: tier.popular ? '0 8px 24px rgba(24, 144, 255, 0.25)' : undefined,
                  }}
                  hoverable
                >
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {tier.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '8px',
                    }}
                  >
                    {tier.price}
                  </div>
                  <p style={{ color: '#8c8c8c', marginBottom: '24px' }}>{tier.description}</p>

                  <div style={{ textAlign: 'left', marginBottom: '24px' }}>
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'rgba(24, 144, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <CheckOutlined style={{ fontSize: '12px', color: '#1890ff' }} />
                        </div>
                        <span style={{ fontSize: '14px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    type={tier.popular ? 'primary' : 'default'}
                    size="large"
                    block
                    style={
                      tier.popular
                        ? {
                            background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
                            border: 'none',
                          }
                        : undefined
                    }
                  >
                    Get Started
                  </Button>
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: '#8c8c8c', marginBottom: '16px' }}>Need something unique?</p>
          <Button
            type="primary"
            size="large"
            style={{
              background: 'linear-gradient(135deg, #ff7a45, #ff9c6e)',
              border: 'none',
            }}
          >
            Create Custom Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
};
