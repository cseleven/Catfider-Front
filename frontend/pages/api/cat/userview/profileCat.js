import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //select by shelter_id
    const { shelter_id } = req.body

    const { count, err } = await supabase
        .from('cat_profile')
        .select('*', { count: 'exact', head: true })
        .match({ shelter_id: shelter_id })


    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, detail, age, sex, breed, color, sterile, vaccine, status, cat_picture, shelter_id')
    if (shelter_id) { query = query.eq('shelter_id', shelter_id) }

    //more ช่องทางการบริจาค

    const { data, error } = await query

    if (error) {
        throw error
    }
    console.log(count)
    res.status(200).json(count + "" + data)

}


