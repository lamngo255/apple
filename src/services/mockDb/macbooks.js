import { CDN } from '@/constants';

const macbookAir = () => {
  const link = `${CDN}/shop/mac/macbook-air`;

  return {
    name: 'Macbook Air',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/space-gray.jpeg`,
      `${link}/colors/gold.jpeg`,
      `${link}/colors/silver.jpeg`,
    ],
    prices: [1249, 1449, 1699],
    specs: {
      models: [
        {
          name: 'Macbook Air',
          desc: '8GB unified memory',
        },
        {
          name: 'Macbook Air',
          desc: '16GB unified memory',
        },
      ],
      capacities: [512, 1024, 2048],
      colors: ['spaceGray', 'gold', 'silver'],
    },
  };
};

const macbookPro13 = () => {
  const link = `${CDN}/shop/mac/macbook-pro-13`;

  return {
    name: 'Macbook Pro 13-inch',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/silver.jpeg`, `${link}/colors/space-gray.jpeg`],
    desc:
      '<div>Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine</div><div>8GB unified memory</div><div>512GB SSD storage</div><div>13-inch Retina display with True Tone</div><div>Magic Keyboard</div><div>Touch Bar and Touch ID</div><div>Force Touch trackpad</div><div>Two Thunderbolt / USB 4 ports</div>',
    prices: [1249, 1449, 1699],
    specs: {
      models: [
        {
          name: 'Macbook Pro',
          desc: '8GB unified memory',
        },
        {
          name: 'Macbook Pro',
          desc: '16GB unified memory',
        },
      ],
      capacities: [512, 1, 2],
      colors: ['silver', 'spaceGray'],
    },
  };
};

const macbookPro16 = () => {
  const link = `${CDN}/shop/mac/macbook-pro-16`;

  return {
    name: 'Macbook Pro 16-inch',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/silver.jpeg`, `${link}/colors/space-gray.jpeg`],
    prices: [2799, 3199, 3799, 4999],
    desc:
      '<div>2.3GHz 8-core 9th-generation Intel Core i9 processor</div><div>Turbo Boost up to 4.8GHz</div><div>AMD Radeon Pro 5500M with 4GB of GDDR6 memory</div><div>16GB of 2666MHz DDR4 memory</div><div>1TB of SSD storage</div><div>16-inch Retina display with True Tone</div><div>Magic Keyboard</div><div>Touch Bar and Touch ID</div><div>Four Thunderbolt 3 ports</div>',
    specs: {
      models: [
        {
          name: 'Macbook Pro',
          desc: '16GB unified memory',
        },
        {
          name: 'Macbook Pro',
          desc: '32GB unified memory',
        },
        {
          name: 'Macbook Pro',
          desc: '64GB unified memory',
        },
      ],
      capacities: [1, 2, 4, 8],
      colors: ['silver', 'spaceGray'],
    },
  };
};

const iMac = () => {
  const link = `${CDN}/shop/mac/imac`;

  return {
    name: 'iMac',
    mainImage: `${link}/main.jpeg`,
    prices: [2799, 3199, 3799, 4999],
    desc:
      '<div>Standard glass</div><div>3.3GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.8GHz</div><div>8GB 2666MHz DDR4 memory</div><div>Radeon Pro 5300 with 4GB of GDDR6 memory</div><div>512GB SSD storage</div><div>Gigabit Ethernet</div><div>Magic Mouse 2</div><div>Magic Keyboard - US English</div>',
    specs: {
      models: [
        {
          name: 'iMac',
          desc: '8GB unified memory',
        },
        {
          name: 'iMac',
          desc: '16GB unified memory',
        },
        {
          name: 'iMac',
          desc: '32GB unified memory',
        },
      ],
      capacities: [1, 2, 4, 8],
    },
  };
};

const iMacPro = () => {
  const link = `${CDN}/shop/mac/imac-pro`;

  return {
    name: 'iMac Pro',
    mainImage: `${link}/main.jpeg`,
    desc:
      '<div>Standard glass</div><div>3.3GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.8GHz</div><div>8GB 2666MHz DDR4 memory</div><div>Radeon Pro 5300 with 4GB of GDDR6 memory</div><div>512GB SSD storage</div><div>Gigabit Ethernet</div><div>Magic Mouse 2</div><div>Magic Keyboard - US English</div>',
    prices: [4999],
    specs: {},
  };
};

const macPro = () => {
  const link = `${CDN}/shop/mac/mac-pro`;

  return {
    name: 'Mac Pro',
    mainImage: `${link}/main.jpeg`,
    prices: [4999],
    desc:
      '<div>3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz</div><div>32GB (4x8GB) of DDR4 ECC memory</div><div>Radeon Pro 580X with 8GB of GDDR5 memory</div><div>256GB SSD storage</div><div>Stainless steel frame with feet</div><div>Magic Mouse 2</div><div>Magic Keyboard with Numeric Keypad - US English</div>',
    specs: {},
  };
};

const macMini = () => {
  const link = `${CDN}/shop/mac/mac-mini`;

  return {
    name: 'Mac Mini',
    mainImage: `${link}/main.jpeg`,
    prices: [899, 1099, 1499],
    desc:
      '<div>Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine</div><div>8GB unified memory</div><div>512GB SSD storage</div><div>Gigabit Ethernet</div>',
    specs: {
      models: [
        {
          name: 'Mac Mini',
          desc: '8GB unified memory',
        },
        {
          name: 'Mac Mini',
          desc: '16GB unified memory',
        },
      ],
      capacities: [512, 1, 2],
    },
  };
};

export default {
  'macbook-air': macbookAir(),
  'macbook-pro-13': macbookPro13(),
  'macbook-pro-16': macbookPro16(),
  'imac-pro': iMacPro(),
  'mac-pro': macPro(),
  'mac-mini': macMini(),
  imac: iMac(),
};
