


function Faker({ faker }) {
  return (
    <div>
      <h1>Faker</h1>
      <pre>{JSON.stringify(faker, null, 2)}</pre>
      
    </div>
  )
}

export default Faker