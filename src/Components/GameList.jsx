import React,{useState,useEffect}from 'react';
import axios from 'axios';
import "../Style/GameList.css"
import { json } from 'react-router-dom';
let game=[
  {
    "id":1,
    "name":"Hi Stiker!",
    "img":"https://talentnetworkinc.com/wp-content/uploads/2012/01/high-striker-square1.jpg",
    "about":"A high striker, also known as a strength tester, or strongman game, is an attraction used in funfairs, amusement parks, fundraisers, and carnivals. It operates by utilizing the lever where one end holds a puck attached to the tower and the other end is struck by the person or contestant using a hammer or mallet"
    
  },
  {
    "id":2,
    "name":"Punch Challenge",
    "img":"https://c8.alamy.com/comp/FPTXT8/punching-a-red-punch-bag-concept-for-competition-challenge-conflict-FPTXT8.jpg",
    "about":"The goal of the group is to see how quickly each member can touch all 30 numbers in order. Each person doesn't have to touch each number, but one group member must touch each number in order"
    
  },
  {
    "id":3,
    "name":"Bow & Arrow",
    "img":"https://m.media-amazon.com/images/I/417eK2Qnc0L.jpg",
    "about":"Bow & Arrow is a simple, addicting game to test your archery skills. Time your shots to release your arrows so they pop the balloons rising in the distance. Avoid hitting the death balloons and make sure you don't run out of arrows!"
    
  },
  {
    "id":4,
    "name":"Catch Fish",
    "img":"https://i.ytimg.com/vi/IIo4mdbtvlU/maxresdefault.jpg",
    "about":"Catch the Fish is a fun fishing game in which you have to pull little fish out of the water to form the given words. First choose a difficulty level, depending on whether you are a beginner or an advanced fisherman. Then get into your boat and cast the fishing hook to collect as many points as possible."
    
  }
]

const GameList = () => {
  const [data,setData]=useState([])


  const getData =() => {
    axios.get(`https://6322fad1362b0d4e7dd81cf0.mockapi.io/DSunList`).then((res)=>{
        setData(res.data);
        console.log(res.data)
    }).catch((err)=>{
       console.log(err);
    })
 }

 useEffect(() =>{
  getData();
 },[])
let gameData=[]
let count=0
let flag=true;
 const addTioCart=(e)=>{
  console.log("HEllo")
 gameData.push(e)
  count++
  localStorage.setItem("gameData",JSON.stringify(gameData))
  
  
 
  
 
  

  
 
 }

  return (
    <div className='gameList'>
     {
            data.map((e,ind) => {
                return <div  key={ind}>
                    <h2>{e.name}</h2>
                    <div className='imgDiv'><img src={e.img} alt={e.name} /></div>
                    <p >{e.about}</p>
                    <button  onClick={()=>{addTioCart(e)}}>Add To Cart</button>
                </div>
            })
        }
      
    </div>
  );
}

export default GameList;
