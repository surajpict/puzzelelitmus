import React from 'react'
import {default as api} from '../store/apiSlice';

export default function List() {
    const { data, isFetching , isSuccess, isError } = api.useGetUserQuery()
    let Users;
    
    const handlerClick = (e) => {
        if(!e.target.dataset.id) return 0;
    }

    if(isFetching){
        Users = <div>Fetching</div>;
    }else if(isSuccess){
        Users = data.map((v, i) => <User key={i} category={v} handler={handlerClick} ></User>);
    }else if(isError){
        Users = <div>Error</div>
    }


  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className='py-4 font-bold text-xl'>Admin View</h1>
        {Users}
    </div>
  )
}

function User({ category }){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r">
            <b>{category.name ?? ''}</b> 
            <span>- started game at - </span>
            <b>{category.date}</b> 
            

        </div>
    )
}