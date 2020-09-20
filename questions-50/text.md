# 1. Что такое React?

Это JS библиотека. Разработка Facebook. Основан на компонентном подходе.

# 2. Основные преимущества React?

- Оптимизация отрисовки
- Использование на сервере и клиенте
- Используется JSX разметка
- Много компонентов

# 3. Ограничение из коробки React?

- Нет валидации форм
- Порог вхождения

# 4. JSX это?

function App(props) {
  return <h1>Заголовок, {props,title}</h1>
}

# 5. Virtual DOM в React?

Работа с DOM деревом затратная операция. Для оптимизации используют копию DOM в объекте и работают с ней. Затем сравнивали два DOM и меняли только разницу.

# 6. Props?

Это свойство для передачи их компоненту.

# 7. State и как его использовать? 

constructor(props) {
  super(props)

  this.state = {
    isOpen: false,
    selectedBlock: 'Информационный'
  }
}

state это объект и он мутабельный. При изменении state происходит render

# 8. refs?

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    return <input type="text" ref={this.inputRef} />
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }
}

# 9. JEST?

фреймворк для тестирования

# 10. Когда используем классовый, а когда функциональный компонент

- есть состояние используем класс
- только отображение используем функциональный

# 11. Работа setState?

- получаем объект из setState
- и создает новое дерево элементов в виртуал доме
- замет делает рендер с изменениями

# 12. Разница между state и props?

state - состояние компонента с изначальными параметрами
props - входящие параметры

# 13. Когда делаем асинхронные запросы?

componentDidMount, как раз после создание(render) компонента в html

# 14. key? 

позволяет точно определять каждый элемент для их управления.

# 15. Компонент mounted?

Когда компонент вмонтирован в DOM и готов к работе

# 16. Разница между контролируемым (stateful) и неконтролируемым (stateless) компонентами.

Со state и без state 

# 17. Фрагмент

return (
  <React.Fragment>
    <h3>Заголовок</h3>
    Текст
  </React.Fragment>
)

return (
  <>
    <h3>Заголовок</h3>
    Текст
  </>
)


# 18. Обработка пользовательских событий?

- React добавляет одно событие и по всплытию определяет по какому элементу был произведен клик.
- Для событий React использует свой синтетик эвент, обертка для всех браузеров для корректной работы.

# 19. Redux?

Библиотека для создания глобального состояния приложения. (Модель данных)

# 20. Жизненный цикл компонента

1. Инициализация
  В конструкторе определяем props и state

2. Mounting
   - componentWillMount
   - render
   - componentDidMount

3. Update
   props
   - componentWillReceiveProps
   - shouldComponentUpdate
   - componentWillUpdate
   - render
   - -componentDidmount

  state
  - shouldComponentUpdate
  - componentWillUpdate
  - render
  - componentDidMount

4. Unmounting
  - componentWillUnmount

# 21. В метод setState можно передавать объект или функцию? В чем разница и что лучше использовать? 

Можно передавать объект или функцию. Функция всегда получает предыдущий state.
Это нужно для гарантированной работы с предыдущим state. 

# 22. Разница между Презентационным компонентом и Контейнером

- Презентационным для отображения 
- Контейнер для определения о взаимодействии (работа со state) 

# 23. Context?

const MyContext = React.createContext(defaultValue)
<MyContext.Provider value={ some value }>

<MyContext.Consumer>
  {value => render value}
</MyContext.Consumer>

Организовывает глобальное хранилище

# 24. HOC (Higher-Order Component)

Паттерн программирования. Функция, которая принимает компонент, а на выходе отдает этот же компонент с добавочным функционалом.

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate (prevProps) {
      console.log('oldProps', prevProps)
      console.log('newProps', this.props)
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps
}

# 25. Что делает shouldComponentUpdate?

- оптимизация рендера, из метода shouldComponentUpdate получаем true или false
  если определенные пропсы или стате поменялись или нет.
- содержится изначально в PureComponent
- в функциональных компонентах это функция ReactMemo

# 26. Store в Redux

Объект содержащий состояние приложения.
С методами 
 - getState
 - dispatch
 - subscribe

# 27. Action в Redux

Объект с обязательным полем TYPE: описываем что делаем

action отправляем в dispatch

# 28. Что нельзя делать в render.

Должен быть pure-функцией. Изменять state в нем нельзя.

# 29. Типы middleware в redux для работы с асинхронными запросами.

- redux-thunk
- redux-promise
- redux-saga

# 30. PureComponent

Включаем в себя методы shouldComponentUpdate для оптимизации

# 31. Изменять state напрямую

Нельзя т.к. не вызовится собыие рендера

# 32. Изменить state используя динамический ключ

inputChangeHandler(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

# 33. Что такое Error Boundaries в React?

Компонент с жизненным этапом componentDidCatch, для обработки ошибок.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false}
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error. errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Чет поломалось</h1>
    }

    return this.props.children
  }
}

# 34. React Hooks?

Концепт не используя класс-компоненты и использовать state и жизненные этапы компонентов. в 16.8

# 35. Разница между useRef и createRef?

- createRef может использоваться в компонентах наследуемых от React.Component и возвращает всегда новая ссылка и нельзя использовать в функциональных компонентах
- useRef создает объект, который не будет изменяться при рендере компонента. При изменение этого объекта не происходит рендер.

# 36. useState?

функция возвращающая два элемента в массиве (кортеж)

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount)
  
  return (
    <>
      Count: {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount => prevCount - 1 )}>-</button>
      <button onClick={()=>setCount(prevCount => prevCount + 1 )}>+</button>
}

# 37. Что такое prop drilling и как его избежать? 

prop drilling - большая иерархия компонентов и передача через них свойств (props)

- использовать Context
- useContext
- Redux.... 

# 38. Валидация props? 

использовать prop-types

import PropTypes from 'prop-types'

MyComponent.propTypes = {
  array: PropTypes.array.isRequired,
}

# 39. Зачем делать eject?

eject - настройка конфигурации отдельно в react-app

# 40. reducer? 

функция, которая принимает state и action и возвращает новый state

# 41. Разница между Flux и MVC

- сложно предсказывать где изменятся данные при MVC
- однонаправленный поток в Flux

# 42. Код

this.setState((prevState, props) => {
  return {
    counter: prevState.counter + props.counter
  }
})

# 43. Второй параметр опционально передаваемый в setState и что он делает

callBack-функция, которая будет вызвана после изменения state.

# 44. mapStateToProps и mapDispatchToProps

функции маперы для работы с state.

# 45. React Fiber?

Новый движок в с 16 версии React. Увеличина производительность рендера и работы с домом.

# 46. Разница между Flow и PropTypes

Flow инструмент для статического анализа кода, аналог это TypeScript

# 47. Рендер происходит каждый раз при setState?

по умолчанию да каждый раз, но можем управлять через shouldComponentUpdate


# 48. Оптимизация react приложения

- shouldComponentUpdate
- PureComponent
- для функциональных компонентов ReactMemo

# 49. Redux Thunk

middleware для асинхронного изменения state

реализовано это в action-creater возвращаем не объект, а функцию с параметрами и из нее уже модифицируем state.

# 50. Разница между React и Angular

Angular фраймворк 