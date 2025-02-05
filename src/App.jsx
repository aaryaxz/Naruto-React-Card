import React, { useState } from 'react'
import Card from "./Components/Card"

function App() {
  const data = [
    {
      name:"Naruto",
      image:"https://i.pinimg.com/736x/06/7c/5c/067c5c000f300b0207913e8c7354c8fb.jpg",
      characterstic:"Never Give Up!",
      added:false,
    },
    {
      name:"Hinata",
      image:"https://i.pinimg.com/736x/54/cb/ec/54cbec1ac7741f16826a73f011cc31d1.jpg",
      characterstic:"Kind person!",
      added:false,
    },
    {
      name:"Obito",
      image:"https://i.pinimg.com/736x/c0/82/c8/c082c86f4ac8a247ec3396bbcb1e2327.jpg",
      characterstic:"Loving personality!",
      added:false,
    },
    {
      name:"Rin ",
      image:"https://i.pinimg.com/736x/d1/75/c5/d175c5d3d9f9d6e41b248bce3c891444.jpg",
      characterstic:"Supportive!",
      added:false,
    },
  ]
  const[val,setVal] = useState(data)
  const handelClick = (cardIndex)=>{
    return setVal((prev)=>{
      return prev.map((item,i)=>{
        if(cardIndex === i){
          return {...item,added:!item.added}
        }
        return item
      })
    })
  }
  return (
    <div className="parent w-full h-[100vh] items-center realtive justify-center flex flex-wrap gap-20">
        <div className='bg-rose-500 px-4 py-1 absolute top-4 right-10 flex gap-4 rounded-sm'>
            <h1 className='font-[Bebas] text-[1.2vw] tracking-wider'>Added</h1>
            <p className='font-[Bebas] text-[1.2vw]'>{(val.filter(item=>item.added)).length}</p>
        </div>
        {val.map((elem,index)=>{
          return <Card key={index} cardIndex = {index} values={elem} cardHandelClik={handelClick}></Card>
        })}
    </div>
  )
}

export default App