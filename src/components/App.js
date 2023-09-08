import { useState } from 'react';
import Stats from './Stats';
import Form from './Form';
import PackingList from './PackingList';
import Logo from './Logo';

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
]; */

export default function App() {
  const [items, setItems] = useState([]);
  

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearItems() { 
    const confirmed = window.confirm('Really clear?');
    if(confirmed) setItems([]);
  }

  return (
  <div className='app'>
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearItems={handleClearItems} />
    <Stats items={items}/>
  </div>
  )
}
