// Add your scripts here

import iro from '@jaames/iro';

const colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  colors: [
    'rgb(100%, 0, 0)', // pure red
    'rgb(0, 100%, 0)', // pure green
    'rgb(0, 0, 100%)', // pure blue
  ],
  layout: [
    {
      component: iro.ui.Wheel,
      options: {}
    },
  ]
});