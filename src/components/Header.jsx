import { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, RocketOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

export const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: 'destinations', label: 'Destinations' },
    { key: 'how-it-works', label: 'How It Works' },
    { key: 'packages', label: 'Packages' },
    { key: 'about', label: 'About' },
  ];

  return (
    <AntHeader
      style={{
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #f0f0f0',
        padding: '0 50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

      <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ border: 'none', background: 'transparent', minWidth: '400px' }}
        />
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button>Sign In</Button>
          <Button type="primary">Get Started</Button>
        </div>
      </div>

      <Button
        className="mobile-menu-button"
        icon={<MenuOutlined />}
        onClick={() => setDrawerVisible(true)}
        style={{ display: 'none' }}
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu mode="vertical" items={menuItems} style={{ border: 'none' }} />
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button block>Sign In</Button>
          <Button type="primary" block>Get Started</Button>
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </AntHeader>
  );
};
