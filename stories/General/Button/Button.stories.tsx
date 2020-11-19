// Button.stories.tsx
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'antd';

export const Primary: React.SFC<{}> = () => <Button>Click Me</Button>;

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;