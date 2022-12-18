import { supabase } from "../supabase"

//delete for user
export default async function handler(req, res) {

  //call parameter from body
  const { queue_id, login_id } = req.body

  //check userID exist 
  var userID = await checkUserId(login_id)
  if (!userID) {
    res.status(400).json("User ID Not Found!")
  } else {
    //check if queue id exist 
    var queueID = await checkQueueId(queue_id)
    if (!queueID) {
      res.status(400).json("Queue ID Not Found!")
    } else {
      console.log(login_id)
      var user_id = await getUserId(login_id)
      //delete
      await supabase.from('queue').delete().eq('queue_id', queue_id).eq('user_id', user_id)
      const { data } = await supabase.from('queue').select().eq('queue_id', queue_id).eq('user_id', user_id)
      //checl exist
      if (data != "" && data != null) {
        res.status(400).json("Delete Queue Failed!")
      }
      res.status(200).json("Delete Queue Success!")
    }
  }
}

//check user_id exist
async function checkUserId(login_id, response) {
  //query
  const { data, error } = await supabase.from('user_profile').select().eq('login_id', login_id)
  if ( data == "" || data == null ) {
    //user_id does not exist
    response = false
  } else {
    response = true
  }

  return response
}


//check queue_id exist
async function checkQueueId(queue_id, response) {
  //query
  const { data, error } = await supabase.from('queue').select().eq('queue_id', queue_id)
  if ( data == "" || data == null ) {
    //queue_id does not exist
    response = false
  } else {
    //queue_id exist
    response = true
  }

  //print result
  return response
}

//check user_id exist
async function getUserId(login_id, user_id) {
  //query
  const { data } = await supabase.from('user_profile').select().eq('login_id', login_id)
  console.log(data)
  if ( data == "" || data == null) {
    //user_id does not exist
    user_id = null
  } else {
    const query = data?.map(({ user_id }) => ({ user_id }))
    const json = JSON.stringify(query)
    user_id = json.split(':')[1].split('}]')[0]
  }
  console.log("user id ", user_id)
  return user_id
}