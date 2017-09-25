// const { createElement } = React
const { render } = ReactDOM

//nested within the style component
// const style = {
//   backgroundColor: 'orange',
// 	color: 'white',
// 	fontFamily: 'verdana'
// }

// now this is converted to jsx
// const title = createElement(
// 	'h1',
// 	{id: 'title', className: 'header', style: style},
// 	'Hello World'
// )

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
		Hello World
	</h1>,
	document.getElementById('react-container')
)
