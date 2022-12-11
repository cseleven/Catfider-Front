import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {queue_id, user_id, shelter_id} = req.body

  //query data 
  var query = supabase.from('queue').select()
  if (user_id != null) {
    query = query.eq('user_id', user_id)
    if (queue_id != null) {
      query = query.eq('queue_id', queue_id)
    }
  }

  //query data 
  if (shelter_id != null) {
    query = query.eq('shelter_id', shelter_id)
    if (queue_id != null) {
      query = query.eq('queue_id', queue_id)
    }
  }

  //query data 
  if (user_id == null & shelter_id == null) {
    query = query.eq('queue_id', queue_id)
  }

  //print data
  const { data, error } = await query
  console.log(data)
  res.status(200).json(data)
}

 //store data to local variable 
  /*const query = data?.map(({queue_id, cat_id, shelter_id, user_id}) => ({
    queue_id,
    cat_id,
    shelter_id,
    user_id,
  }))
  console.log("data : ", query)
  console.log("Query Data Success!")*/
  