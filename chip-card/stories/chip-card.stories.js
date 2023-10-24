import { html } from 'lit';
import '../src/chip-card.js';

export default {
  title: 'ChipCard',
  component: 'chip-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <chip-card
      style="--chip-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </chip-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
