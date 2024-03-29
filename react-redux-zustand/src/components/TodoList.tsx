import { useSelector } from 'react-redux'

export function TodoList(){
  const store = useSelector(store => {
    return store.todo
  })

  return (
    <ul>
      {store.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}