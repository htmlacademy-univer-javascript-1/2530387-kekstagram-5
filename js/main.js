const getRandomInteger = (a, b) => {
  let lower = Math.ceil(Math.min(a, b));
  let upper = Math.floor(Math.max(a, b));
  let result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Огненные небеса: закат окрасил горизонт в яркие оттенки оранжевого и пурпурного, создавая завораживающую картину природы.',
  'Смех и счастье: вокруг стола, полной домашних угощений, собралась вся семья, делясь историями и радостными моментами.',
  'Вершины, окутанные утренним туманом, создают атмосферу уединения и спокойствия, вдохновляя на новые приключения.',
  'Шумный рынок на рассвете, где жизнерадостные продавцы предлагают свежие продукты, а местные жители собираются для утренних покупок.',
  'Собака с радостно вьющимися хвостом исследует новые тропы, ловя каждый момент и радуясь жизни.'
];

const names = [
  'Александр',
  'Дмитрий',
  'Евгений',
  'Артём',
  'Марина',
  'Тимур'
];

const comments = (quantity) => Array.from({length: quantity}, function(value, index) {
  return {
    id: index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names)
  }
});

const createdData = (id, numOfComments) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: comments(numOfComments),

});

const generatedData = () => Array.from({length:25}, function(value, id) {
  let numOfComments = getRandomInteger(0, 30);
  return createdData(id + 1, numOfComments)
});