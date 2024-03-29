import { useAppselector } from '../store'

export function TodoList(){
  const store = useAppselector(store => {
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