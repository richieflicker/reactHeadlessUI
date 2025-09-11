import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  TextArea, 
  Typography, 
  Checkbox, 
  Radio, 
  Switch, 
  Badge, 
  Avatar,
  Icon
} from '../atoms';
import { 
  Modal, 
  Card, 
  FormField, 
  Select, 
  Tabs, 
  Accordion 
} from '../molecules';
import styles from './AtomMoleculeIntegration.module.scss';

export const AtomMoleculeIntegration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    notifications: true,
    plan: 'basic'
  });
  const [selectValue, setSelectValue] = useState('');

  const selectOptions = [
    { label: 'Basic Plan', value: 'basic' },
    { label: 'Pro Plan', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise' },
  ];

  const handleInputChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.integrationShowcase}>
      <div className={styles.header}>
        <Typography variant="h1" className={styles.title}>
          Atom-Molecule Integration Showcase
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Demonstrating robust integration between atomic components and molecular compositions
        </Typography>
      </div>

      {/* Complex Form with Integrated Atoms and Molecules */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Integrated Form System
        </Typography>
        <Typography variant="body2" className={styles.sectionDescription}>
          FormField molecules seamlessly integrate with Input, TextArea, and Typography atoms
        </Typography>
        
        <Card variant="outlined" className={styles.formCard}>
          <Card.Header 
            title="User Profile"
            subtitle="Complete your profile information"
            action={
              <Badge variant="info" size="sm">
                Required
              </Badge>
            }
          />
          <Card.Body>
            <div className={styles.formGrid}>
              <FormField
                label="Full Name"
                help="Enter your first and last name"
                required
                inputType="input"
                inputProps={{
                  value: formData.name,
                  onChange: handleInputChange('name'),
                  placeholder: 'John Doe'
                }}
              />
              
              <FormField
                label="Email Address"
                help="We'll use this to send you updates"
                required
                inputType="input"
                inputProps={{
                  type: 'email',
                  value: formData.email,
                  onChange: handleInputChange('email'),
                  placeholder: 'john@example.com'
                }}
              />
              
              <FormField
                label="Bio"
                help="Tell us about yourself"
                inputType="textarea"
                inputProps={{
                  value: formData.message,
                  onChange: handleInputChange('message'),
                  placeholder: 'Write a brief description...',
                  rows: 4
                }}
              />
              
              <div className={styles.checkboxGroup}>
                <FormField
                  label="Preferences"
                  help="Manage your notification preferences"
                >
                  <div className={styles.preferenceItem}>
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange('newsletter')}
                    />
                    <Typography variant="body2" className={styles.preferenceLabel}>
                      Subscribe to newsletter
                    </Typography>
                  </div>
                  
                  <div className={styles.preferenceItem}>
                    <Switch
                      id="notifications"
                      checked={formData.notifications}
                      onChange={handleInputChange('notifications')}
                    />
                    <Typography variant="body2" className={styles.preferenceLabel}>
                      Push notifications
                    </Typography>
                  </div>
                </FormField>
              </div>
            </div>
          </Card.Body>
          <Card.Footer
            actions={
              <div className={styles.formActions}>
                <Button variant="secondary" size="md">
                  Cancel
                </Button>
                <Button variant="primary" size="md">
                  Save Profile
                </Button>
              </div>
            }
          />
        </Card>
      </section>

      {/* Card Compositions with Atoms */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Card Compositions with Atoms
        </Typography>
        <Typography variant="body2" className={styles.sectionDescription}>
          Cards integrate Typography, Button, Badge, Avatar, and Icon atoms for rich content
        </Typography>
        
        <div className={styles.cardGrid}>
          <Card variant="shadowed" className={styles.featureCard}>
            <Card.Header
              title="User Dashboard"
              subtitle="Welcome back, Sarah!"
              action={
                <Avatar 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                  size="sm"
                />
              }
            />
            <Card.Body>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <Typography variant="h3" className={styles.statNumber}>
                    1,234
                  </Typography>
                  <Typography variant="body2" className={styles.statLabel}>
                    Total Users
                  </Typography>
                </div>
                <div className={styles.statItem}>
                  <Typography variant="h3" className={styles.statNumber}>
                    567
                  </Typography>
                  <Typography variant="body2" className={styles.statLabel}>
                    Active Today
                  </Typography>
                </div>
              </div>
            </Card.Body>
            <Card.Footer
              actions={
                <div className={styles.cardActions}>
                  <Button variant="primary" size="sm" prefix="📊">
                    View Analytics
                  </Button>
                  <Button variant="secondary" size="sm">
                    Settings
                  </Button>
                </div>
              }
            />
          </Card>

          <Card variant="elevated" className={styles.notificationCard}>
            <Card.Header
              title="System Status"
              action={
                <Badge variant="success" size="sm">
                  <Icon name="check" size="sm" />
                  Online
                </Badge>
              }
            />
            <Card.Body>
              <div className={styles.statusList}>
                <div className={styles.statusItem}>
                  <Icon name="server" size="sm" className={styles.statusIcon} />
                  <Typography variant="body2">API Server</Typography>
                  <Badge variant="success" size="xs">Healthy</Badge>
                </div>
                <div className={styles.statusItem}>
                  <Icon name="database" size="sm" className={styles.statusIcon} />
                  <Typography variant="body2">Database</Typography>
                  <Badge variant="success" size="xs">Healthy</Badge>
                </div>
                <div className={styles.statusItem}>
                  <Icon name="cloud" size="sm" className={styles.statusIcon} />
                  <Typography variant="body2">CDN</Typography>
                  <Badge variant="warning" size="xs">Degraded</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Modal with Complex Content */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Modal with Integrated Components
        </Typography>
        <Typography variant="body2" className={styles.sectionDescription}>
          Modal molecules contain complex forms and card compositions
        </Typography>
        
        <Button 
          variant="primary" 
          onClick={() => setModalOpen(true)}
          prefix="⚙️"
        >
          Open Settings Modal
        </Button>
        
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Header>
            <div className={styles.modalHeader}>
              <Typography variant="h3">Account Settings</Typography>
              <Badge variant="info" size="sm">Beta</Badge>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultIndex={0}>
              <Tabs.List>
                <Tabs.Tab index={0}>Profile</Tabs.Tab>
                <Tabs.Tab index={1}>Security</Tabs.Tab>
                <Tabs.Tab index={2}>Notifications</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panels>
                <Tabs.Panel index={0}>
                  <FormField
                    label="Display Name"
                    help="This is how your name appears to other users"
                    inputType="input"
                    inputProps={{
                      placeholder: 'Enter display name',
                      value: formData.name,
                      onChange: handleInputChange('name')
                    }}
                  />
                </Tabs.Panel>
                <Tabs.Panel index={1}>
                  <Card variant="outlined">
                    <Card.Header title="Two-Factor Authentication" />
                    <Card.Body>
                      <Typography variant="body2">
                        Add an extra layer of security to your account.
                      </Typography>
                    </Card.Body>
                    <Card.Footer
                      actions={
                        <Button variant="primary" size="sm">
                          Enable 2FA
                        </Button>
                      }
                    />
                  </Card>
                </Tabs.Panel>
                <Tabs.Panel index={2}>
                  <Accordion>
                    <Accordion.Item itemId="email">
                      <Accordion.Header itemId="email">
                        Email Notifications
                      </Accordion.Header>
                      <Accordion.Body itemId="email">
                        <div className={styles.notificationSettings}>
                          <div className={styles.settingItem}>
                            <Typography variant="body2">Weekly digest</Typography>
                            <Switch checked={formData.newsletter} onChange={handleInputChange('newsletter')} />
                          </div>
                          <div className={styles.settingItem}>
                            <Typography variant="body2">Security alerts</Typography>
                            <Switch checked={formData.notifications} onChange={handleInputChange('notifications')} />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tabs.Panel>
              </Tabs.Panels>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      {/* Integration Benefits */}
      <section className={styles.section}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Integration Benefits
        </Typography>
        <div className={styles.benefitsGrid}>
          <Card variant="outlined" className={styles.benefitCard}>
            <Card.Header
              title="🎯 Consistent Theming"
              subtitle="All components share the same design tokens"
            />
            <Card.Body>
              <Typography variant="body2">
                Atoms and molecules automatically inherit theme colors, spacing, and typography through CSS custom properties.
              </Typography>
            </Card.Body>
          </Card>
          
          <Card variant="outlined" className={styles.benefitCard}>
            <Card.Header
              title="🔧 Composable Architecture"
              subtitle="Mix and match atoms to create molecules"
            />
            <Card.Body>
              <Typography variant="body2">
                Molecules are built from atoms, ensuring consistency and enabling flexible composition patterns.
              </Typography>
            </Card.Body>
          </Card>
          
          <Card variant="outlined" className={styles.benefitCard}>
            <Card.Header
              title="♿ Accessibility First"
              subtitle="Built-in ARIA support and keyboard navigation"
            />
            <Card.Body>
              <Typography variant="body2">
                All components include proper accessibility attributes and keyboard navigation out of the box.
              </Typography>
            </Card.Body>
          </Card>
          
          <Card variant="outlined" className={styles.benefitCard}>
            <Card.Header
              title="📱 Responsive Design"
              subtitle="Mobile-first approach with breakpoint tokens"
            />
            <Card.Body>
              <Typography variant="body2">
                Components adapt to different screen sizes using consistent breakpoint tokens and responsive utilities.
              </Typography>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};