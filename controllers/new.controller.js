import { newModel } from "../models/new.model.js";


export const filterNewByWord = async function(word , user_id){
  //get players by name
  try {
    const news = await newModel.find({short_description: { $regex: '.*' + word + '.*' }, user_id:user_id})
    if (news) {
      return news;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const getNews= async function(user_id){
  //get one specific player
  try {
    const news = await newModel.find({user_id:user_id});
    if (news) {
      return news;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const getNewsByCategory= async function(user_id,category_id){
  //get one specific player
  try {
    const news = await newModel.find({user_id:user_id,category_id:category_id});
    if (news) {
      return news;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

