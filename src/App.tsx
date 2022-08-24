import './App.css';
import {useEffect, useRef, useState} from 'react'
import List from './components/List';
import Form from './components/Form';
import {Sub} from './types'

interface appState {
  subs: Array<Sub>
}

const INITIAL_STATE = [
    {
      nick: 'Karii',
      subMonths: 2,
      avatar: 'https://i.pravatar.cc/150?u=cami',
      description: 'moderator from february'
    },
    {
      nick: 'Xarly',
      subMonths: 4,
      avatar: 'https://i.pravatar.cc/150?u=tom',
    },
    {
      nick: 'Sairy',
      subMonths: 1,
      avatar: 'https://i.pravatar.cc/150?u=cloe',
      description: 'Best sister ever'
    }
  ]

function App() {

  const [subs, setSubs] = useState<appState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
 
  return (
    <div className="App" ref={divRef}>

      <h1>My subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
