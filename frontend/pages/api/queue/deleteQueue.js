import { supabase } from "../supabase"

export default async function handler(req, res) {

  //call parameter from body
  const {queue_id, user_id, shelter_id} = req.body

  //check if queue id exist 
  var queueID = await checkQueueId(queue_id)
  if (queueID) {

    //query
    var query = supabase.from('queue').delete().eq('queue_id', queue_id)
    
    //check if user_id input
    if (user_id != null) {
      //delete  
      query = query.eq('user_id', user_id)
      const { data, error } = await query
      console.log(data)
      res.status(200).json("Delete Queue Success!")
    } 

    //check if shelter_id input
    if (shelter_id != null){
      //delete  
      query = query.eq('shelter_id', shelter_id)
      const { data, error } = await query
      console.log(data)
      res.status(200).json("Delete Queue Success!")
    }

    //no user_id and shelter input
    if (user_id == null && shelter_id == null) {
      res.status(400).json("Missing user_id or shelter_id")
    }
  } else {
    //queue_id does not exist
    res.status(400).json("Queue ID not found!")
  }
}

//check queue_id exist
async function checkQueueId(queue_id, response) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if ( data == "" ) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  //print result
  return response
}