import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] }
  }
};

export const Primary = {
  args: {
    children: 'Button',
    size: 'md'
  }
};
