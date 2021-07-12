export interface IModuleItem {
  question: string;
  answer: string;
  source: string;
}

export const getModuleData = (moduleName?: string): IModuleItem[] => {
  return [
    {
      question: 'numerical comparison operators?',
      answer:
        'x==y [x is equal to y]\n' +
        'x===y [x is exactly equal to y]\n' +
        '!= [not equal to]\n' +
        '> [greater than]\n' +
        '< [less than]\n' +
        '>= [greater than or equal to]\n' +
        '<= [less than or equal to]',
      source: '',
    },
    {
      question: 'HTML DOM mouse events?',
      answer:
        'onclick\n' +
        'ondblclick\n' +
        'mousedown\n' +
        'mousemove\n' +
        'mouseover\n' +
        'mouseout\n' +
        'mouseup',
      source: '',
    },
    {
      question: 'can variables include other variables?',
      answer: 'yes',
      source: '',
    },
    {
      question: 'what is an array?',
      answer: 'an object used to store multiple values in a single variable.',
      source: '',
    },
  ];
};
