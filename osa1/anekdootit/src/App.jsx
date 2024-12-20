import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState({
    points: new Uint8Array(7)
  })

  const handleVote = (selected) => {
    votes.points[selected] += 1
    const updatedVotes = {
    ...votes,
    points: new Uint8Array(votes.points)
    };

    setVote(updatedVotes)
  }

  return (
    <div>
      <Header header="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() => handleVote(selected)} text="vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 8))} text="next anecdote" />
      <Header header="Anecdote with most votes" />
      <p>{anecdotes[votes.points.indexOf(Math.max(...votes.points))]}</p>
    </div>
  )
}

export default App
