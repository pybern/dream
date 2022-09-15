import { supabase } from '../utils/supabaseClient'

export async function getStaticProps() {
    const { data, error } = await supabase.from('faker').select('*').single()

    return {
      props:{
        data,
      }
    }
}

function Faker({ data }) {
  return (
    <div><h1>{data.city}</h1></div>
  )
}

export default Faker