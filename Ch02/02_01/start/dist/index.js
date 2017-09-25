const { createElement } = React
const { render } = ReactDOM

const title = createElement(
  //sending it 3 different agruments
  'h1',
  {id: 'title', className: 'header'},
  'Hello World'
)

// once element is created we need to render it

render(
  title,
  document.getElementById('react-container')
)
